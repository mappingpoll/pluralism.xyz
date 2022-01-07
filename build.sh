#! /usr/bin/env bash

set -e

yarn workspace results2019-2020 build

rm -rf public/

mkdir public
mkdir public/results2019-2020

cp -r packages/homepage/* public/
cp -r packages/results2019-2020/build/* public/results2019-2020/

