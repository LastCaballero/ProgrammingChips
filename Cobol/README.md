# Cobol
Man muss sich wirlich fragen, wer Cobol erfunden hat und warum. Und man muss sich fragen, warum es heute noch benutzt wird. Mein Eindruck ist, dass die Programmiersprache vollkommen untypisch ist.

## Einfache Ausgabe
Eine einfach Ausgabe sieht so aus:
```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID.	AUSGABE.

PROCEDURE DIVISION.
	DISPLAY "GUCK KUCK".
```
## Wiederholte Ausgabe
Eine wiederholte Ausgabe sieht so aus:
```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. 'Wiederholte Ausgabe'.

PROCEDURE DIVISION.
	PERFORM 10 TIMES
		DISPLAY "GUCK KUCK"
	END-PERFORM.

```

