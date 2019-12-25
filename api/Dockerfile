FROM nestjs/cli:6.12.9

ENV API_ROOT /api

# Create work dir.
RUN mkdir -p $API_ROOT
WORKDIR $API_ROOT

# Install dependencies.
COPY package*.json $API_ROOT/
RUN npm i

COPY . $API_ROOT