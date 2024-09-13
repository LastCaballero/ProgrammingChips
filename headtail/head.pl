#! /usr/bin/perl

use strict ;
use warnings ;

sub sum {
    my $sum ;
    while (my $value = shift) {
        $sum += $value ;
    }
    $sum ;
}

my @files   = grep { -f } @ARGV ;
my $lines = sum grep { /[0-9]+/ } @ARGV ;

for( @files ) {
    open my $reader, "<", $_ ;
    my @lines = <$reader> ;
    print "*****$_*****\n" ;
    print @lines[0..$lines-1] ;
    close $reader ;
}

