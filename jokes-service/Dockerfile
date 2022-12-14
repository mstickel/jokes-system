FROM node:19 as builder
WORKDIR /app
COPY *.json ./
RUN npm install
COPY . .
RUN npx tsc

FROM node:19
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/node_modules /app/node_modules
EXPOSE 8080
CMD [ "node", "build/index.js" ]