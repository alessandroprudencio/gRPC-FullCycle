FROM node:14-alpine

WORKDIR /usr/src/api

COPY . .

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn" , "run", "start"]


