#! /usr/bin/perl

use strict ;
use warnings ;

my @files   = grep { -f } @ARGV ;
my @args    = grep { not -f } @ARGV ;

my @from_pipe ;
if ( not -t ) {
    @from_pipe = <stdin> ;
    print $_ for reverse @from_pipe ;
}

for ( @files ) {
    open my $reader, "<", $_ ;
    my @lines = <$reader> ;
    close $reader ;
    print $_ for reverse @lines ;
}