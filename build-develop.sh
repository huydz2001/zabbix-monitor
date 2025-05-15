git fetch origin
git checkout main
git pull --rebase origin main
docker buildx build --platform linux/amd64 -f Dockerfile -t zabbix-collector:latest .
docker image tag zabbix-collector:latest 103.20.144.134:80/develop/zabbix-collector:latest
docker push 103.20.144.134:80/develop/zabbix-collector:latest
