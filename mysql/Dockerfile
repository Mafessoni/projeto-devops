FROM mysql:latest
WORKDIR /bd

RUN chown -R mysql:root /var/lib/mysql/

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=DEVOPS
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=123456
ENV MYSQL_ROOT_PASSWORD=123456

ADD script.sql /etc/mysql/script.sql

RUN sed -i 's/MYSQL_DATABASE/DEVOPS/g' /etc/mysql/script.sql
RUN cp /etc/mysql/script.sql /docker-entrypoint-initdb.d

EXPOSE 3306