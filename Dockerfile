# The builder from node image
FROM node:16-alpine as builder

ARG ENV

# build-time variables
# prod|sandbox its value will be come from outside
#ARG env=prod

RUN apk update && apk add --no-cache make git

# Move our files into directory name "client"
WORKDIR /client

ADD . /client

RUN apk add --update \
  # python \
  # python-dev \
  py-pip \
  build-base \
  yarn \
  git \
  openssh-client \
  # && pip install virtualenv \
  && rm -rf /var/cache/apk/*

#RUN cd /client && git fetch && git checkout dev
RUN rm -rf node_modules
# RUN npm install
RUN yarn
# Build with $env variable from outside
RUN cd /client && npm run build

# Build nginx image
FROM nginx:alpine as client
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/dist/ /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
