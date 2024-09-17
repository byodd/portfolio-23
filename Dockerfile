FROM node:latest
MAINTAINER gatta.ba@etu.univ-lyon1.fr
WORKDIR /app/

RUN ["apt", "update", "-y"]
RUN ["apt", "upgrade", "-y"]

COPY . /app/

EXPOSE 3000

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

CMD ["npm", "start"]
