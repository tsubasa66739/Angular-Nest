FROM nestjs/cli:6.12.9

ENV API_ROOT /api

RUN mkdir -p $API_ROOT
WORKDIR $API_ROOT

COPY package*.json $API_ROOT/
RUN npm i

COPY . $API_ROOT