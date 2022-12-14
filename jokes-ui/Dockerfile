FROM node:19 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run-script build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]