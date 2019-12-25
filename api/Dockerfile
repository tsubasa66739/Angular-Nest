FROM node:12.13.0-slim

ENV API_ROOT /api

RUN mkdir -p $API_ROOT
# ADD . $API_ROOT
WORKDIR $API_ROOT

# RUN apt-get update || : && apt-get install python make g++ -y 
COPY package*.json $API_ROOT/

RUN npm i -g @nestjs/cli && npm i 

COPY . $API_ROOT