FROM node

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build:prod

FROM nginx

COPY --from=0 /app/build /usr/share/nginx/html
