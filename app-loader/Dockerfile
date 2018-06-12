FROM node:8.11.2-alpine as build
WORKDIR build
COPY .npmrc .
COPY package.json .
COPY package-lock.json .
RUN NODE_ENV=development npm install

COPY tsconfig.json .
COPY tsconfig.dev.json .
COPY tsconfig.prod.json .
COPY webpack.config.js .
COPY webpack.deps.config.js .
COPY build_tools build_tools
COPY src src

ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.13.8-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /build/dist /usr/share/nginx/html
