############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node:14-alpine3.13

LABEL "app"="POC"
LABEL version="1.0.0"

RUN mkdir -p /opt/app
RUN mkdir -p /var/log/dockerlog

WORKDIR /opt/app

COPY ./ .

RUN npm install --quiet

EXPOSE 3001

CMD npm start
