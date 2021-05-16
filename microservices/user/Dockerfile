FROM node:14-alpine

WORKDIR /usr/src/microservices/user

COPY package.json /usr/src/microservices/user

RUN yarn install

COPY . .

ENTRYPOINT ["yarn" , "run", "start"]


