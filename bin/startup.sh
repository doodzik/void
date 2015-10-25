#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
  # Do something under Mac OS X platform
  source $(brew --prefix nvm)/nvm.sh
fi

# npm run webpack -- --progress --colors --watch &
./node_modules/.bin/webpack --progress --colors
nvm run index.js
