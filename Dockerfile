FROM node as build
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm ci
COPY ./ /frontend/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
COPY --from=build /frontend/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf