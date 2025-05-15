FROM node:20-alpine AS build
WORKDIR /app
VOLUME /root/.npm
COPY package*.json .
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json /app
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev

FROM node:20-alpine
RUN apk update \
    && apk add --no-cache --progress tzdata \
    && ln -fs /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=dependencies /app/node_modules /app/node_modules
EXPOSE 5000
CMD [ "node", "/app/dist/main.js" ]
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api || exit 1