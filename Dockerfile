FROM node:16-alpine

WORKDIR /server

COPY package* .
RUN npm i

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]