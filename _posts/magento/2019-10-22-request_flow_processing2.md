---
layout: post
comments: true
title:  "Magento 2 Request Flow Processing (2)"
date:   2019-10-22
categories: magento
---

<ul>
        <li>index.php</li>
        <li>\Magento\Framework\App\Bootstrap -> run</li>
        <li>\Magento\Framework\App\Http -> launch</li>
        <li>\Magento\Framework\App\FrontController -> dispatch</li>
        <li>\Magento\Framework\View\Result\Page -> renderResult</li>
        <li>\Magento\Framework\App\Response\Http -> sendResponse</li>
</ul>

<p>
This was what we have looked into what request flow processing is in the previous post. But last time, we didn't go into the dispatch method of the frontController that was happening before the renderResult.

</p>

```php
    public function dispatch(RequestInterface $request)
    {
        \Magento\Framework\Profiler::start('routers_match');
        $this->validatedRequest = false;
        $routingCycleCounter = 0;
        $result = null;
        while (!$request->isDispatched() && $routingCycleCounter++ < 100) {
            /** @var \Magento\Framework\App\RouterInterface $router */
            foreach ($this->_routerList as $router) {
                try {
                    $actionInstance = $router->match($request);
                    if ($actionInstance) {
                        $result = $this->processRequest(
                            $request,
                            $actionInstance
                        );
                        break;
                    }
                } catch (\Magento\Framework\Exception\NotFoundException $e) {
                    $request->initForward();
                    $request->setActionName('noroute');
                    $request->setDispatched(false);
                    break;
                }
            }
        }
        \Magento\Framework\Profiler::stop('routers_match');
        if ($routingCycleCounter > 100) {
            throw new \LogicException('Front controller reached 100 router match iterations');
        }
        return $result;
    }

```

<p>
Within the while loop, the request tries to find the isDispatched method and goes through routers which all implement 
\Magento\Framework\App\RouterInterface, which includes 
</p>

<ul>
<li>Magento\Framework\App\Router\Base</li>
<li>MAgento\UrlRewrite\Controller\Router</li>
<li>Magento\Cms\Controller\Router</li>
<li>Magento\Framework\App\Router\DefaultRouter</li>
</ul>


<p>
Each routers would have their own match functions. For the time being, let's check the App\Router\Base.
Inside match, Base class calls matchAction. Let's take a look at both.
</p>

```php
    public function match(\Magento\Framework\App\RequestInterface $request)
    {
        $params = $this->parseRequest($request);

        return $this->matchAction($request, $params);
    }

    protected function matchAction(\Magento\Framework\App\RequestInterface $request, array $params)
    {
        $moduleFrontName = $this->matchModuleFrontName($request, $params['moduleFrontName']);
        if (empty($moduleFrontName)) {
            return null;
        }

        /**
         * Searching router args by module name from route using it as key
         */
        $modules = $this->_routeConfig->getModulesByFrontName($moduleFrontName);

        if (empty($modules) === true) {
            return null;
        }

        /**
         * Going through modules to find appropriate controller
         */
        $currentModuleName = null;
        $actionPath = null;
        $action = null;
        $actionInstance = null;

        $actionPath = $this->matchActionPath($request, $params['actionPath']);
        $action = $request->getActionName() ?: ($params['actionName'] ?: $this->_defaultPath->getPart('action'));
        $this->_checkShouldBeSecure($request, '/' . $moduleFrontName . '/' . $actionPath . '/' . $action);

        foreach ($modules as $moduleName) {
            $currentModuleName = $moduleName;

            $actionClassName = $this->actionList->get($moduleName, $this->pathPrefix, $actionPath, $action);
            if (!$actionClassName || !is_subclass_of($actionClassName, $this->actionInterface)) {
                continue;
            }

            $actionInstance = $this->actionFactory->create($actionClassName);
            break;
        }

        if (null == $actionInstance) {
            $actionInstance = $this->getNotFoundAction($currentModuleName);
            if ($actionInstance === null) {
                return null;
            }
            $action = self::NO_ROUTE;
        }

        // set values only after all the checks are done
        $request->setModuleName($moduleFrontName);
        $request->setControllerName($actionPath);
        $request->setActionName($action);
        $request->setControllerModule($currentModuleName);
        $request->setRouteName($this->_routeConfig->getRouteByFrontName($moduleFrontName));
        if (isset($params['variables'])) {
            $request->setParams($params['variables']);
        }
        return $actionInstance;
    }
```
<p>
Long story short, it's returning an instance that implements the actionInterface. 
After getting the ActionInterface, we call the dispatch method on ActionInstance, which is inside the processRequest method.
</p>

```php

// Frontcontroller
   private function processRequest(
        HttpRequest $request,
        ActionInterface $actionInstance
    ) {
        $request->setDispatched(true);
        $this->response->setNoCacheHeaders();
        $result = null;

        //Validating a request only once.
        if (!$this->validatedRequest) {
            try {
                $this->requestValidator->validate(
                    $request,
                    $actionInstance
                );
            } catch (InvalidRequestException $exception) {
                //Validation failed - processing validation results.
                $this->logger->debug(
                    'Request validation failed for action "'
                    .get_class($actionInstance) .'"'
                );
                $result = $exception->getReplaceResult();
                if ($messages = $exception->getMessages()) {
                    foreach ($messages as $message) {
                        $this->messages->addErrorMessage($message);
                    }
                }
            }
            $this->validatedRequest = true;
        }

        //Validation did not produce a result to replace the action's.
        if (!$result) {
            if ($actionInstance instanceof AbstractAction) {
                $result = $actionInstance->dispatch($request);
            } else {
                $result = $actionInstance->execute();
            }
        }

        //handling redirect to 404
        if ($result instanceof NotFoundException) {
            throw $result;
        }
        return $result;
    }

```

<p>
The ActionInstance here is calling the method from \Magento\Framework\App\Action\Action, which would have the request as parameter and 
return an object that implemetns \Magento\Framework\App\ResponseInterface.

</p>

// \Magento\Framework\App\Action\Action

```php
    public function dispatch(RequestInterface $request)
    {
        $this->_request = $request;
        $profilerKey = 'CONTROLLER_ACTION:' . $request->getFullActionName();
        $eventParameters = ['controller_action' => $this, 'request' => $request];
        $this->_eventManager->dispatch('controller_action_predispatch', $eventParameters);
        $this->_eventManager->dispatch('controller_action_predispatch_' . $request->getRouteName(), $eventParameters);
        $this->_eventManager->dispatch(
            'controller_action_predispatch_' . $request->getFullActionName(),
            $eventParameters
        );
        \Magento\Framework\Profiler::start($profilerKey);

        $result = null;
        if ($request->isDispatched() && !$this->_actionFlag->get('', self::FLAG_NO_DISPATCH)) {
            \Magento\Framework\Profiler::start('action_body');
            $result = $this->execute();
            \Magento\Framework\Profiler::start('postdispatch');
            if (!$this->_actionFlag->get('', self::FLAG_NO_POST_DISPATCH)) {
                $this->_eventManager->dispatch(
                    'controller_action_postdispatch_' . $request->getFullActionName(),
                    $eventParameters
                );
                $this->_eventManager->dispatch(
                    'controller_action_postdispatch_' . $request->getRouteName(),
                    $eventParameters
                );
                $this->_eventManager->dispatch('controller_action_postdispatch', $eventParameters);
            }
            \Magento\Framework\Profiler::stop('postdispatch');
            \Magento\Framework\Profiler::stop('action_body');
        }
        \Magento\Framework\Profiler::stop($profilerKey);
        return $result ?: $this->_response;
    }
```

<p>
The execute method in the middle is called by $this, which is implemented by the ActionInterface execute method.
This can be a Custom controller, and it can return a $resultPage object as well as a null, then the dispatch method will 
return $this->response. In that case, the result will be an instance of \Magento\Framework\View\Result\Page, which is covered with a wrapper of 
\Magento\Framework\View\Result\Page\Interceptor.
This would extend \Magento\Framework\View\Result\Layout class, which also implement \Magento\Framework\App\ResponseInterface.
</p>

<p>
Finally, the result would be returned as value of frontcontroller's dispatch method.
As a frontend developers, the main concern would be what would be happening inside the renderResult method.
Page, and Layout is where all the theme translations, layout, template loading will happen.
</p>

<p>This is the main flow of the process.</p>
<ul>
    <li>index.php</li>
    <li>\Magento\Framework\App\Bootstrap->run</li>
    <li>\Magento\Framework\App\Http->launch</li>
    <li>\Magento\Framework\App\FrontController->dispatch</li>
    <li>\Magento\Framework\App\Router\Bsae->match</li>
    <li>\Magento\Framework\App\Action\Action->dispatch</li>
    <li>\Magento\Framework\View\Result\Page->renderResult</li>
    <li>\Magento\Framework\App\Response\Http->sendResponse</li>
</ul>



{% include disqus2.html %}

