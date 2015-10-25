#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
  # Do something under Mac OS X platform
  source $(brew --prefix nvm)/nvm.sh
fi

# npm run webpack -- --progress --colors --watch &
nvm use 0.10 
./node_modules/.bin/jest
