#! /usr/bin/perl

use strict      ;
use warnings    ;


my @files   = grep { -e }  @ARGV    ;
my @stdi    = <stdin> if ( not -t ) ;

if ( @stdi ) {
    printf "%-20s %4d\n",'stdin' , scalar @stdi ;
}

for ( @files ) {
    open my $file , '<' ,   $_ ;
    my      @lines  =   <$file> ;
    close   $file ;
    printf "%-20s %4d\n" ,  $_ ,    scalar @lines ;
}
