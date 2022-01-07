#! /usr/bin/env bash

set -e

if [[ "$1" == "--dev" ]]; then
  echo building dev
  yarn build:dev
  exit 0
elif [[ "$1" == "--prod" ]]; then
  echo preparing prod branch
  git switch production
  git rm public
  git commit -m "cleanup"

  git switch master
  echo building prod
  yarn build:prod

  git switch production
  git add public
  git commit -m "build: $(date)"
  git push
  git switch master
  exit 0
else
  echo must be run with --dev or --prod flag
  exit 1
fi

