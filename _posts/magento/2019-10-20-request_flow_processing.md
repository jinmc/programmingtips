---
layout: post
comments: true
title:  "Magento 2 Request Flow Processing (1)"
date:   2019-10-20
categories: magento
---
<p>
Request flow processing is a complicated subject in Magento 2.
First of all, it would go into the directory Magento is installed in, and access pub/index.php, or just index.php.
It would depend on how the magento is set up in the server configuration of Nginx or Apache.
A quick check you can do is to inject a echo inside index.php to figure out where index.php is coming from.
</p>
<p>
This is inside index.php. The one inside pub would look similar.
</p>

```php
<?php

try {
    require __DIR__ . '/app/bootstrap.php';
} catch (\Exception $e) {
    echo <<<HTML
<div style="font:12px/1.35em arial, helvetica, sans-serif;">
    <div style="margin:0 0 25px 0; border-bottom:1px solid #ccc;">
        <h3 style="margin:0;font-size:1.7em;font-weight:normal;text-transform:none;text-align:left;color:#2f2f2f;">
        Autoload error</h3>
    </div>
    <p>{$e->getMessage()}</p>
</div>
HTML;
    exit(1);
}

$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $_SERVER);
/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication(\Magento\Framework\App\Http::class);
$bootstrap->run($app);

```

<p>
This is the application's entry point. Inside the try catch block, it is trying to validate the php version
so it matches the magento version. Require function is used to include the other php file inside this php file.
You can also use include function, but the difference is that Require will throw an exception if you have an error.
Reference : https://www.c-sharpcorner.com/UploadFile/051e29/include-and-require-in-php/
</p>

<p>
The create function of App\Bootstrap class will make the parameters that are needed for the objectmanager, such as 
filesystemdirectorylist, filesystemdriverpool, configfilepool. 
</p>

<p>
Next is the calling the createApplication with  App\Http file, and call the run method.
Disrearding the interceptors, this is the run method of the Magento\Framework\App\Http Class. 
</p>

```php
    public function run(AppInterface $application)
    {
        try {
            try {
                \Magento\Framework\Profiler::start('magento');
                $this->initErrorHandler();
                $this->assertMaintenance();
                $this->assertInstalled();
                $response = $application->launch();
                $response->sendResponse();
                \Magento\Framework\Profiler::stop('magento');
            } catch (\Exception $e) {
                \Magento\Framework\Profiler::stop('magento');
                $this->objectManager->get(LoggerInterface::class)->error($e->getMessage());
                if (!$application->catchException($this, $e)) {
                    throw $e;
                }
            }
        } catch (\Exception $e) {
            $this->terminate($e);
        }
    } // phpcs:enable
```

<p>
The two big methods we have to focus on are $application->launch and $response->sendResponse.
We'll first take a look at $application->launch. This launch function comes from the App\Http instance.
</p>

```php
    public function launch()
    {
        $areaCode = $this->_areaList->getCodeByFrontName($this->_request->getFrontName());
        $this->_state->setAreaCode($areaCode);
        $this->_objectManager->configure($this->_configLoader->load($areaCode));
        /** @var \Magento\Framework\App\FrontControllerInterface $frontController */
        $frontController = $this->_objectManager->get(\Magento\Framework\App\FrontControllerInterface::class);
        $result = $frontController->dispatch($this->_request);
        // TODO: Temporary solution until all controllers return ResultInterface (MAGETWO-28359)
        if ($result instanceof ResultInterface) {
            $this->registry->register('use_page_cache_plugin', true, true);
            $result->renderResult($this->_response);
        } elseif ($result instanceof HttpInterface) {
            $this->_response = $result;
        } else {
            throw new \InvalidArgumentException('Invalid return type');
        }
        if ($this->_request->isHead() && $this->_response->getHttpResponseCode() == 200) {
            $this->handleHeadRequest();
        }
        // This event gives possibility to launch something before sending output (allow cookie setting)
        $eventParams = ['request' => $this->_request, 'response' => $this->_response];
        $this->_eventManager->dispatch('controller_front_send_response_before', $eventParams);
        return $this->_response;
    }
```

<p>
The important variable above is $frontController. After getting it by objectManager, frontcontroller will call the dispatch method with the request.
After that it goes through the condition whether $result variable is an instance of ResultInterface. In fact, both FrontController and Result variables will be 
an instance of an Interceptor, each \Framework\App\FrontController\Interceptor, and \Framework\View\Result\Page\Interceptor, but will extend the class of App\FrontController and Result\Page. Also, the Result\Page will extend \Magento\Framework\View\Result\Layout, which extends \Magento\Framework\Controller\AbstractResult and implements \Magento\Framework\Controller\ResultInterface.
And that is when it will get caught in the first conditional, and will call the renderResult method, which is declared in \Magento\Framework\View\Result\Layout class.We can take a peak at the renderResult class, and it will add HTTP headers, content to the response object.
</p>

```php
    public function renderResult(ResponseInterface $httpResponse)
    {
        \Magento\Framework\Profiler::start('LAYOUT');
        \Magento\Framework\Profiler::start('layout_render');

        $this->eventManager->dispatch('layout_render_before');
        $this->eventManager->dispatch('layout_render_before_' . $this->request->getFullActionName());

        $this->applyHttpHeaders($httpResponse);
        $this->render($httpResponse);

        \Magento\Framework\Profiler::stop('layout_render');
        \Magento\Framework\Profiler::stop('LAYOUT');
        return $this;
    }
```

<p>
As this article is getting too long, I might have another article for further steps. But to make an abstract, we can have it to few methods.
</p>

<ul>
	<li>index.php</li>
        <li>\Magento\Framework\App\Bootstrap -> run</li>
        <li>\Magento\Framework\App\Http -> launch</li>
        <li>\Magento\Framework\App\FrontController -> dispatch</li>
        <li>\Magento\Framework\View\Result\Page -> renderResult</li>
        <li>\Magento\Framework\App\Response\Http -> sendResponse</li>
</ul>

{% include disqus2.html %}

