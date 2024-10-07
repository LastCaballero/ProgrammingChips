# Volksbank-CSV-Parser

Das ist ein kleines Perl-Skript, welches CSV-Dateien aus dem Online-Banking der Volksbank auswertet.
Starten kann man das Programm ganz einfach:

```sh
./csv_parser.pl umsatzdaten.csv
```
## was das Programm macht
Im Prinzip wird eine Bilanz aus den Bankdaten erstellt. Die einzelnen T-Konten sind hierbei:

* Penny-Markt
* Aldi
* Rewe
* Miete
* Strom
* ...

Die Bewegungen der einzelnen Konten werden aufgelistet und aufsummiert und dargestellt. Aus diesen Daten wird dann schließlich eine Bilanz erstellt.


