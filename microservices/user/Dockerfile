FROM node:14-alpine

WORKDIR /usr/src/microservices/user

COPY . .

RUN yarn install

ENTRYPOINT ["yarn" , "run", "start"]


