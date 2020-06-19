FROM node:latest

WORKDIR /src/app

COPY package.json /src/app

RUN npm install

COPY . /src/app

EXPOSE 9003

CMD [ "node", "server/server.js" ]
