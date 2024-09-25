#! /usr/bin/bash

declare ntw_info
declare ntw_count
declare octet_exp="[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"
declare     octet="200.200.200"

if      (( $# == 0 )) ; then
    {
        ntw_info="200.200.200"
        ntw_count=8
    }
elif    (( $# == 1 )) ; then
    {
        ntw_info=$( grep -Eo $octet_exp <<<$1 || echo $octet  )
        ntw_count=8
    }
     
elif    (( $# == 2 )) ; then
    {
        ntw_info=$( grep -Eo $octet_exp <<<$1 || echo $octet )
        ntw_count=$2
    }
fi


declare -A network
declare -A possibs=(
    2   $(( 2#10000000 ))
    4   $(( 2#11000000 ))
    8   $(( 2#11100000 ))
    16  $(( 2#11110000 ))
    32  $(( 2#11111000 ))
    64  $(( 2#11111100 ))
    128 $(( 2#11111110 ))
)
three_digits () {
    local num=$1
    case ${#num} in
        1) echo "00$num" ;;
        2) echo  "0$num" ;;
        3) echo   "$num" ;;
    esac
}
divide () {
    local   addr=${1:-200.200.200}
    local   count=${2:-8}
    local divider=${possibs[$count]}
    for num in {0..255}
    do
         network[$((divider & num))]+="$addr.$(three_digits $num) "
    done
}
output () {
    for key in $( sed 's/ /\n/g' <<<${!network[@]} | sort -n ); do
        {
            echo ${network[$key]} |
                sed 's/ /\n/g' | 
                paste - - - - - 
            echo
        }
    done
}

divide $ntw_info $ntw_count

output
