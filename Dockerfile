FROM node:10.12.0

RUN apt update && apt upgrade -y && \
    apt install git -y

RUN npm install -g yarn

WORKDIR /usr/local/app

COPY . /usr/local/app

EXPOSE 3000