#!/usr/bin/env bash

export GIT_REPOSITORY_URL="$GIT_REPOSITORY_URL"

# cloning users repo url into this path
git clone "$GIT_REPOSITORY_URL" /home/app/output
