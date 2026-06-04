#stage 1
FROM node:20-alpine AS builder 

WORKDIR /app

COPY package*.json ./
COPY app.js .

RUN npm run build

#stage 2
FROM nginx AS runtime

WORKDIR /app

COPY --from=builder /app/output.txt .

CMD ["node", "app.js"]