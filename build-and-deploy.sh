#!/bin/sh

git checkout develop
npm run build
git add --all
git commit -m "Nova Build"
git push
git subtree push --prefix dist origin master
