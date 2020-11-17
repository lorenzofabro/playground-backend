FROM node:15.0.1-alpine3.10 AS node-15

WORKDIR /node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]