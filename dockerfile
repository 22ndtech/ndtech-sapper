FROM node:lts-buster as build
WORKDIR /work

# Set the git and github variables
ENV GIT_USER_NAME="$GIT_USER_NAME"
ENV GIT_USER_EMAIL="$GIT_USER_EMAIL"
ENV GIT_REPOSITORY_NAME="$GIT_REPOSITORY_NAME"
ENV GITHUB_USER="$GITHUB_USER"
ENV GITHUB_USER_EMAIL="$GITHUB_USER_EMAIL"
ENV GITHUB_TOKEN="$GITHUB_TOKEN"
ENV REPOSITORY_NAME="$REPOSITORY_NAME"
ENV REPOSITORY_URL="https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_ORGANIZATION}/${GIT_REPOSITORY_NAME}.git"

RUN apt-get install -y git
RUN git clone https://github.com/22ndtech/ndtech-sapper.git
RUN cd ndtech-sapper \
 && npm install

COPY ./entrypoint.bash /usr/bin/entrypoint.bash

ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.bash" ]