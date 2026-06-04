FROM node:20-alpine

LABEL author="Sagar"
LABEL project="express-app"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]