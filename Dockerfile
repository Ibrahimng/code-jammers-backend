FROM node:16.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .


EXPOSE 3000

CMD ["npm", "start"]