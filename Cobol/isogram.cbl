identification division.
program-id.	isogram.

data division.
working-storage section.
01	word	pic	a(50).
01	idx	pic	9(8).
01	matches	pic	9(10) value 0.
01	len	pic	9(10).


procedure division.
	accept word.
	move function length( function trim( word ) ) to len.
	
	perform varying idx from 1 by 1 until idx > len
		inspect word tallying matches for all word(idx:1)
	end-perform.
	
	if matches = len
		display "isogram"
	else
		display "not a isogram"
	end-if.
end-run.
