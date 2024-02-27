FROM php:7.2-apache
RUN apt-get update  \
    && docker-php-ext-install pdo_mysql mysqli mbstring

WORKDIR /var/www/html
COPY ./public .
EXPOSE 80
