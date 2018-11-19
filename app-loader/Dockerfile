FROM node:10.13.0-alpine as build
WORKDIR build
COPY .npmrc .
COPY package.json .
COPY package-lock.json .
RUN NODE_ENV=development npm install

COPY tsconfig.json .
COPY tsconfig.dev.json .
COPY tsconfig.prod.json .
COPY webpack.config.js .
COPY src src

ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.15.6-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /build/dist /usr/share/nginx/html
