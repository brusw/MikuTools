FROM node:14.21.3-slim

WORKDIR /usr/src/app
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm@7.33.7

COPY . .
RUN pnpm install

ENV NODE_ENV=production
ENV HOST 0.0.0.0

RUN pnpm run build
CMD [ "pnpm", "start" ]
