use strict      ;
use warnings    ;

my @sorted_list ;
my @files   = grep { -e }  @ARGV    ;
my @stdi    = <stdin> if ( not -t ) ;

if ( @stdi ) {
    push @sorted_list, [ 'stdin', scalar @stdi ] ;
}

for ( @files ) {
    open my $file , '<' ,   $_ ;
    my      @lines  =   <$file> ;
    close   $file ;
    push @sorted_list, [ $_ , scalar @lines ] ;
}

for( sort { $a->[1] <=> $b->[1] } @sorted_list ) {
    printf "%-30s %4d\n" ,$_->[0] , $_->[1] ;
}
