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
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY tsconfig.json tsconfig.json
COPY tsconfig.tsbuildinfo tsconfig.tsbuildinfo

# NI
RUN npm install -g pnpm

# pnpm to install dep
RUN pnpm install

# NOTE: give exectue to all __uog__ (owner other group)
RUN chmod +x /scripts/main.sh
RUN chmod +x /src/script.ts

# Set entry point for script launch
ENTRYPOINT [ "/scripts/main.sh" ]
