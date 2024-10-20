identification division.
program-id.	'1mal1'.

data division.
working-storage section.
01 	zahl1 	pic 999.
01 	zahl2 	pic 999.
01 	mem 	  pic 999.

procedure division.

perform varying zahl1 from 1 by 1 until zahl1 = 11
	perform varying zahl2 from 1 by 1 until zahl2 = 11
		multiply zahl1 by zahl2 giving mem
		display mem space with no advancing
	end-perform
	display space
end-perform.
