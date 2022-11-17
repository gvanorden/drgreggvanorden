#!/bin/sh
 
version="$1"

git add .
git commit -m $version
git push -u origin main
