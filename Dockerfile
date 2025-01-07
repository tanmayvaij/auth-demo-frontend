FROM node:22-alpine3.19
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD yarn start
