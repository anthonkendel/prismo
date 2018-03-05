#!/usr/bin/env bash

VERSION=`cat VERSION`
CNAME="prismo.cc"

npm install
npm run build
echo
echo Current version: ${VERSION}
node_modules/vue-cli-ghpages/src/bin/vue-cli-ghpages --message=${VERSION} --CNAME=${CNAME}
