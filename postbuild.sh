#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute

cp -r ./dist/apps/amalihomes/server ./.amplify-hosting/compute/default

cp -r ./dist/apps/amalihomes/browser ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json