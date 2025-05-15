#!/bin/bash

docker rm -f zabbix-collector
docker system prune -af
docker run --pull=always -d -p 0.0.0.0:5000:5000 \
--restart unless-stopped \
--name zabbix-collector 103.20.144.134:80/develop/zabbix-collector:latest