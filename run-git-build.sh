#!/bin/sh
 
version="$1"

git add build
git commit -m $version
git push -u origin main
