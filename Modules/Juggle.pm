package Juggle ;

use strict      ;
use warnings    ;

sub juggle_array {
    my $ar_ref = shift ;
    my( $rd1, $rd2 , $mem ) ;
    my $rand = sub { int( rand( @$ar_ref + 0 ) ) } ;
    for ( 1 .. 300 ) {
        $rd1 = &$rand ;
        $rd2 = &$rand ;
        $mem = $ar_ref->[$rd1] ;
        $ar_ref->[$rd1] = $ar_ref->[$rd2] ;
        $ar_ref->[$rd2] = $mem ; 
    }
}

1
