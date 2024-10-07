#! /usr/bin/perl

use strict      ;
use warnings    ;


sub output 	;
sub toFloat 	;
sub balance 	;

my $accounts 	=	{} ;
my $sums	= 	{} ;

my $file = shift ;

open my $reader, '<', $file ; <$reader> ;
<$reader> ;

while ( <$reader>  ) {
	my @line = split /;/, $_ ;
	my $date 	= $line[4] 				;
	my $name 	= $line[6] 				;
	my $money 	= toFloat( $line[11] ) 	;
	push @{$accounts->{$name}}, [ $date , $money ] ;
	$sums->{$name} += $money ;
}

close($reader) ;

output() ;
balance() ;


sub output {
	my $format 	= "%-35s" . "%8.2f" . "\n" 	;
	my $header = "\n" . "%-35s" . "%8d" . "\n" ;
	for ( keys %$accounts ) {
		printf $header, $_, @{$accounts->{$_}} + 0  ;
		for ( 
			sort {
					$a->[1] <=> $b->[1]
			} 
				@{$accounts->{$_}} 
			) {
			 printf $format, $_->[0], $_->[1] ;
		}
		printf $format, 'Sum:' , $sums->{$_} ;
	}
}

sub toFloat {
	my $string = shift ;
	   $string =~ s/,/./;
	   return $string + 0
}

sub balance {
	my $format 	= "%-35s" . "%8.2f" . "\n" 	;
	my $sum = 0 ;
	print "\n\n" ;
	print "*" x 43, "\n" ;
	print "BALANCE\n" ;
	print "*" x 43, "\n" ;
	for ( sort { $sums->{$a} <=> $sums->{$b} } keys %$sums ) {
		printf $format,$_ , $sums->{$_} ;
		$sum += $sums->{$_} ;
	}
	print "*" x 43, "\n" ;
	printf $format,"Gewinn/Verlust" , $sum ;
}
