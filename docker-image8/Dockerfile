FROM node:20-alpine

LABEL author="Sagar"
LABEL version="1.0"

ARG APP_ENV=dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=$APP_ENV

EXPOSE 3000

CMD ["node","app.js"]