FROM node:14.18.0

WORKDIR /fontend

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "serve", "-s", "build"]