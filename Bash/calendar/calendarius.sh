#! /usr/bin/bash

declare -i i=0

while true
do
    date=$(date -d "2024-01-01 + $i day" +"%d %B %Y    %A" )
    [[ $date =~ "Jan" ]] && ((i > 300)) && break
    echo
    echo
    echo
    echo "$date"
    echo "*******************************************************************"
    (( i++ ))
done
