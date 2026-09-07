#!/usr/bin/env bash
export GIT_REPOSITORY__URL="$GIT_REPOSITORY__URL"
git clone "$GIT_REPOSITORY__URL" /dist/output

exec node /dist/script.js
