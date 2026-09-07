# get NODE img, i was going to do to Ubuntu:focal, but dropped that idea
FROM node:slim

# update the ubuntu
RUN apt-get update

# Install git coz we need to getch it
RUN apt-get install -y git

# copy scripts/package
COPY /scripts/main.sh /scripts/main.sh
COPY /src/script.ts /src/script.ts
COPY package*.json .
COPY kafka.pem kafka.pem
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY tsconfig.json tsconfig.json

# NI
RUN npm install -g pnpm

# pnpm to install dep (includes devDeps like typescript)
RUN pnpm install

# compile TypeScript
RUN pnpm run build

# NOTE: give execute to all (owner other group)
RUN chmod +x /scripts/main.sh

# Set entry point for script launch
ENTRYPOINT [ "/scripts/main.sh" ]
