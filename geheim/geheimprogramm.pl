#! /usr/bin/perl

use strict      ;
use warnings    ;

# 4, 6 , 9, 11
my $data = {} ;
my $file = shift ;

open my $reader, '<', $file ;
<$reader> ;
while ( <$reader> ) {
      my @dt = (split /;/, $_)[ 6, 4, 9, 11 ] ;
      my $string = $dt[3] ; $string =~ s/,/./; my $float = $string + 0 ;
      $dt[3] = $float ;      
      push @{$data->{$dt[0]}} , [ @dt[1,2,3] ];
}
close $reader ;

for ( sort keys %$data) {
      #print $_ , "\n" ;
      my $info = {} ;
      my $sum ;
      my $min ;
      my $max ;
      for ( @{$data->{$_}} ) {
            #printf "%s %s %s\n", $_->[0], $_->[1], $_->[2] ;
            $sum += $_->[2] ;
            if ( not defined $min ) {
                  $min = $_->[2] ;
            } else {
                  $min = $min < $_->[2] ? $min : $_->[2] ;
            }
            if ( not defined $max ) {
                  $max = $_->[2] ;
            } else {
                  $max = $max > $_->[2] ? $max : $_->[2] ;
            }
      }
      $info->{'sum'}    = $sum ;
      $info->{'min'}    = $min ;
      $info->{'max'}    = $max ;
      $info->{'avg'}    = $sum / @{$data->{$_}}  ;
      $info->{'count'}  = @{$data->{$_}} + 0 ;
      push @{$data->{$_}}, $info ;
      
}

for ( sort keys %$data) {
      print "\n" ;
      print $_ , "\n" ;
      for ( @{$data->{$_}}[0..@{$data->{$_}} - 2] ) {
            printf "%-15s%-25s%10.2f\n", $_->[0], $_->[1], $_->[2] ;
      }
      my %info = %{@{$data->{$_}}[$#{$data->{$_}}]} ;
      printf "%-40s%10.2f\n", "sum", $info{'sum'} ;
      printf "%-40s%10.2f\n", "min", $info{'min'} ;
      printf "%-40s%10.2f\n", "max", $info{'max'} ;
      printf "%-40s%10.2f\n", "avg", $info{'avg'} ;
      printf "%-40s%10i\n", "count", $info{'count'} ;
}

sub stats {
      my @min_box ;
      my @max_box ;
      my @sum_box ;
      my @avg_box ;
      my @count_box ;
      for ( sort keys %$data) {
            my %info = %{@{$data->{$_}}[$#{$data->{$_}}]} ;
            push @min_box,    {name => $_ , value => $info{'min'}} ;
            push @max_box,    {name => $_ , value => $info{'max'}} ;
            push @sum_box,    {name => $_ , value => $info{'sum'}} ;
            push @avg_box,    {name => $_ , value => $info{'avg'}} ;
            push @count_box,  {name => $_ , value => $info{'count'}} ;
      }
}

stats() ;
