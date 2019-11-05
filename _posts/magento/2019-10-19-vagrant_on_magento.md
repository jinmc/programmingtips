---
layout: post
comments: true
title:  "Magento 2 on Vagrant"
date:   2019-10-19
categories: magentobackend
---

<p>
Vagrant is a huge project. This is not only difficult because you would have to learn about Vagrant and Magento but
you have to know and be able with the server configurations on the LAMP or Nginx configurations.
Also, this is also hard because to run a virtual machine you should have a good machine power and enough ram or it will break most certainly.
</p>

<p>
First, we'll have to setup VagrantFile.
</p>
```
Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/xenila64" // for ubuntu 16.04
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.synced_folder "~/original/", "/var/www/html/", :mount_option => ["dmode=777", "fmode=777"]    
    config.vm.provider "virtualbox" do |vb|
        vb.memory = "4096"
        vm.cpus = 2
    end

end
```
<p>
and run vagrant up. After ssh ing inside, we would have to update the linux
and we can follow maento's documentation https://devdocs.magento.com/guides/v2.3/install-gde/prereq/nginx.html?itm_source=devdocs&itm_medium=search_page&itm_campaign=federated_search&itm_term=ubuntu
</p>

<p>
This is also a good reference.
https://gist.github.com/GhazanfarMir/03bd1f1f770a3834d47274586d46ea62
</p>
```
sudo apt-get update
sudo apt-get -y install nginx // install nginx

# Add Repository which gives us the latest php version 7.2
sudo add-apt-repository ppa:ondrej/php
sudo apt update

sudo apt install php7.2 php7.2-fpm php7.2-mysql php-common php7.2-cli php7.2-common php7.2-json php7.2-opcache php7.2-readline php7.2-mbstring php7.2-xml php7.2-gd php7.2-curl

sudo apt-get install -y 
```
<p>
Also, we should install mysql on the server (or mariadb).
</p>

```
sudo apt-get install mariadb-server mariadb-client

sudo systemctl stop mysql.service
sudo systemctl start mysql.service
sudo systemctl enable mysql.service

sudo mysql_secure_installation
```



<p>
No we have php, and nginx installed. 
Now we can install magento. We can install magento from magento website, or use composer to download it.
Although, in the site we can see the 403 error. This can be either authorization error or nginx error.
Mostly, it is nginx error. 
We should go to /etc/nginx/sites-available/default and edit it.
Add index.php in the list of index, and add location ~ \.php$ {
</p>

```
server {
  listen 80;
  listen [::]:80;
  server_name _;
  root /usr/share/nginx/html/;
  index index.php index.html index.htm index.nginx-debian.html;

  location / {
    try_files $uri $uri/ /index.php;
  }

  location ~ \.php$ {
    fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
    include snippets/fastcgi-php.conf;
  }


 # A long browser cache lifetime can speed up repeat visits to your page
  location ~* \.(jpg|jpeg|gif|png|webp|svg|woff|woff2|ttf|css|js|ico|xml)$ {
       access_log        off;
       log_not_found     off;
       expires           360d;
  }

  # disable access to hidden files
  location ~ /\.ht {
      access_log off;
      log_not_found off;
      deny all;
  }
}
```

<p>
This is the reference : https://www.linuxbabe.com/ubuntu/install-lemp-stack-nginx-mariadb-php7-2-ubuntu-18-04-lts

Also we can install phpmyadmin.
</p>
sudo apt install phpmyadmin

<p>
After all this, we can install magento on the command line.
Going through all this, I have a error in the admin panel as something went wrong, and some technical problem happened with the server and created.
</p>
https://tutes.in/solved-magento-2-error-a-technical-problem-with-the-server-created-an-error-try-again-to-continue-what-you-were-doing-if-the-problem-persists-try-again-later/
<p>This is the link for solving the issue.</p>


{% include disqus2.html %}

