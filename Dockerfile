FROM node:8-alpine

EXPOSE 8080

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
ADD . /app
RUN npm run build

CMD ["yarn", "start"]
