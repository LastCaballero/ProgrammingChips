#! /usr/bin/perl

use strict ;
use warnings ;

my @lines = () ;

if(not -t) {
    while( my $line = <stdin>) {
        push @lines, $line if not grep { $line eq $_ } @lines ;
    }
}

for ( grep { -f } @ARGV ) {
    open my $file , "<", $_ ;
    while( my $line = <$file>) {
        push @lines, $line if not grep { $line eq $_  } @lines ;
    }
    close $file ;
}

print $_ for @lines ;
