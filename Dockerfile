FROM node:12-alpine

LABEL company="JM Sistemas"
LABEL aplicacion="API"

# Create app directory
WORKDIR /app

# App
ADD . /app

# Install app dependencies
RUN cd /app

RUN yarn install

EXPOSE  3333

CMD [ "yarn", "start" ]