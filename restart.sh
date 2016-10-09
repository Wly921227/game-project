#!/bin/sh

port=8080
ID=`lsof -i :$port | grep node | awk '{print $2}'`

for id in $ID
do
        kill -9 $id
done

npm run dev
