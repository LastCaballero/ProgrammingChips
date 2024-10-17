identification 		division.
program-id.	'argument test'.

data 			division.
	working-storage section.
	01 	arg1	pic 	X(200).


procedure 		division.
	accept		arg1.
	display 	arg1.

end-run.
