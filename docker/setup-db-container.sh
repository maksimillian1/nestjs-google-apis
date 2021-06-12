#!/usr/bin/env bash
echo "Starting mysql"

docker rm -f mysql-google-auth
docker build . -t mysql:local

docker run -d -p 3306:3306 --name mysql-google-auth mysql:local
sleep 10s

mysql -h localhost -P 3306 --protocol=tcp -u root -proot -e "CREATE DATABASE google DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
