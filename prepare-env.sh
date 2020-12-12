#!/usr/bin/env bash

sourceEnv=$1
targetEnv=$2

if [ ! -f $1 ];
then
    echo "WARNING: Source Config file cannot be found!"
    exit 1
fi

echo "# Auto generated file, don't modify. Please refer to [.env.dev, .env.beta, .env.prod, .env.sit or .env.uat]" > $targetEnv
echo "" >> $targetEnv

cat $sourceEnv >> $targetEnv
