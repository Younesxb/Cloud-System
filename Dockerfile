FROM php:apache


COPY ./html /var/www/html


RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

RUN echo '<Directory /var/www/html>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride None\n\
    Require all granted\n\
    </Directory>' > /etc/apache2/conf-available/custom-access.conf \
    && a2enconf custom-access


EXPOSE 80
