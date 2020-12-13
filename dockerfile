FROM node:lts-buster as build
WORKDIR /work

COPY ./package.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]