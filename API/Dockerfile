FROM node:18
WORKDIR /.

COPY package.json ./
COPY tsconfig.json ./
COPY src /src


RUN yarn install
RUN yarn build

RUN cd ./dist

WORKDIR /dist

CMD ["node","index.js"]

EXPOSE 80