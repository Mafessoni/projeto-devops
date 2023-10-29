FROM node:18
WORKDIR /.

COPY package.json ./
COPY tsconfig.json ./
COPY src /src


RUN npm install --production --ignore-engines
RUN npm build

RUN cd ./dist

WORKDIR /dist

CMD ["node","index.js"]

EXPOSE 80
