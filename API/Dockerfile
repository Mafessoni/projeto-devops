FROM node:18
WORKDIR /.

COPY package.json ./
COPY tsconfig.json ./
COPY src /src


RUN yarn install --production --ignore-engines
RUN yarn build

RUN cd ./dist

WORKDIR /dist

CMD ["node","index.js"]

EXPOSE 80
