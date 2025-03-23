#!/bin/bash -e

eval "$(ssh-agent -s)"
ssh-add mykey

git pull

docker ps -aq | xargs docker rm -fv

export TAG="4.1.1"
docker compose -f /home/ubuntu/superset/docker-compose-image-tag.yml up -d