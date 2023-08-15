FROM node:18-alpine

RUN npm install vite -g

WORKDIR /usr/src/app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
