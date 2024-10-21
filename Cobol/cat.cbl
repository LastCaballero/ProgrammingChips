identification division.
program-id.	    cat.


environment division.
input-output section.
file-control.
	select cat-file assign to file-name
	organization is line sequential.

data division.
file section.
fd	cat-file.
01	cat-input	pic	x(300).

working-storage section.
01	line-input	pic	x(300).
01	file-name	pic	x(200).
01	file-end	pic	A	value 'N'.

procedure division.
display "please give me a file name: " with no advancing.
accept file-name.
open input cat-file.
perform until file-end = 'Y'
	read cat-file into cat-input
	at end
		move 'Y' to file-end
	not at end
		move cat-input to line-input
		move function trim( line-input trailing ) to line-input
		display line-input with no advancing
end-perform.
