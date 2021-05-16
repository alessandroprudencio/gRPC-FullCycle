FROM node:14-alpine

WORKDIR /usr/src/api

COPY package.json /usr/src/api/

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn" , "run", "start"]


