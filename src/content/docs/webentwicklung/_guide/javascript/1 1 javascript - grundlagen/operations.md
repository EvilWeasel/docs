---
title: Operationen
description: tbd
---

## Zuweisungs-Operatoren

Mit Zuweisungs-Operatoren werden Werte an andere Werte übergeben, oder mit diesen Verrechnet bzw. Inkrementiert. 

```jsx
// Zuweisungsoperatoren
// = ist der Zuweisungsoperator
// Er weist der Variablen auf der linken Seite den Wert auf der rechten Seite zu
// Der Wert auf der rechten Seite kann auch eine Variable sein
let text3 = "Deklaration und Initialisierung in einem Schritt";
text2 = text3;

// += ist der Zuweisungsoperator für Addition
// Er addiert den Wert auf der rechten Seite zum Wert auf der linken Seite 
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 += zahl;
// zahl2 = zahl2 + zahl; << das gleiche wie oben

// -= ist der Zuweisungsoperator für Subtraktion
// Er subtrahiert den Wert auf der rechten Seite vom Wert auf der linken Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 -= zahl;

// *= ist der Zuweisungsoperator für Multiplikation
// Er multipliziert den Wert auf der rechten Seite mit dem Wert auf der linken Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 *= zahl;

// /= ist der Zuweisungsoperator für Division
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und weist das Ergebnis der Variablen auf der linken Seite zu
zahl2 /= zahl;

// %= ist der Zuweisungsoperator für Modulo
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und weist den Rest der Division der Variablen auf der linken Seite zu
zahl2 %= zahl;

// ++ ist der Zuweisungsoperator für Inkrementierung
// Er erhöht den Wert der Variablen auf der linken Seite um 1
zahl2++;

// -- ist der Zuweisungsoperator für Dekrementierung
// Er verringert den Wert der Variablen auf der linken Seite um 1
zahl2--;
```

## **Vergleichs-Operatoren:**

Mit den Vergleichs-Operatoren können einzelne Werte miteinander Verglichen werden.

```jsx
// Vergleichsoperatoren
// == ist der Vergleichsoperator für Gleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte gleich sind
// und false zurück, wenn beide Werte ungleich sind
zahl2 == zahl;
zahl2 == 1;
3 == 5;

// === ist der Vergleichsoperator für Identität
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte gleich sind
// und false zurück, wenn beide Werte ungleich sind
// Der Unterschied zum Vergleichsoperator für Gleichheit ist, 
// dass der Vergleichsoperator für Identität auch den Datentyp vergleicht
zahl2 === zahl;
zahl2 === 1;
3 === 5;

// != ist der Vergleichsoperator für Ungleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte ungleich sind
// und false zurück, wenn beide Werte gleich sind
zahl2 != zahl;
zahl2 != 1;
3 != 5;

// /== ist der Vergleichsoperator für Ungleichheit
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn beide Werte ungleich sind
// und false zurück, wenn beide Werte gleich sind
// Der Unterschied zum Vergleichsoperator für Ungleichheit ist,
// dass der Vergleichsoperator für Ungleichheit auch den Datentyp vergleicht
zahl2 !== zahl;
zahl2 !== 1;
3 !== 5;

// > ist der Vergleichsoperator für Größer als
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite größer ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite kleiner oder gleich ist als der Wert auf der rechten Seite
zahl2 > zahl;
zahl2 > 1;
3 > 5;

// < ist der Vergleichsoperator für Kleiner als
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite kleiner ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite größer oder gleich ist als der Wert auf der rechten Seite
zahl2 < zahl;
zahl2 < 1;
3 < 5;

// >= ist der Vergleichsoperator für Größer oder gleich
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite größer oder gleich ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite kleiner ist als der Wert auf der rechten Seite
zahl2 >= zahl;
zahl2 >= 1;
3 >= 5;

// <= ist der Vergleichsoperator für Kleiner oder gleich
// Er vergleicht den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt true zurück, wenn der Wert auf der linken Seite kleiner oder gleich ist als der Wert auf der rechten Seite
// und false zurück, wenn der Wert auf der linken Seite größer ist als der Wert auf der rechten Seite
zahl2 <= zahl;
zahl2 <= 1;
3 <= 5;
```

## **Rechen-Operatoren:**

Mit Hilfe der Rechenoperatoren können, Mathematische Berechnungen vorgenommen werden.

```jsx
// Rechenoperatoren
// + ist der Rechenoperator für Addition
// Er addiert den Wert auf der linken Seite zum Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 + zahl;
zahl2 + 1;
3 + 5;

// - ist der Rechenoperator für Subtraktion
// Er subtrahiert den Wert auf der rechten Seite vom Wert auf der linken Seite
// und gibt das Ergebnis zurück
zahl2 - zahl;
zahl2 - 1;
3 - 5;

// * ist der Rechenoperator für Multiplikation
// Er multipliziert den Wert auf der rechten Seite mit dem Wert auf der linken Seite
// und gibt das Ergebnis zurück
zahl2 * zahl;
zahl2 * 1;
3 * 5;

// / ist der Rechenoperator für Division
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 / zahl;
zahl2 / 1;
3 / 5;

// % ist der Rechenoperator für Modulo
// Er dividiert den Wert auf der linken Seite durch den Wert auf der rechten Seite
// und gibt den Rest der Division zurück
zahl2 % zahl;
zahl2 % 1;
3 % 5;

// ** ist der Rechenoperator für Potenzierung
// Er potenziert den Wert auf der linken Seite mit dem Wert auf der rechten Seite
// und gibt das Ergebnis zurück
zahl2 ** zahl;
zahl2 ** 1;
3 ** 5;
```

## **Logische-Operatoren:**

Logische Operatoren, werden dazu verwendet um eine bestimmte Bedingung abzufragen.

```jsx
// Logische Operatoren
// && ist der logische Operator für Und
// Er gibt true zurück, wenn beide Werte true sind
// und false zurück, wenn mindestens einer der beiden Werte false ist
istWahr && true;
istWahr && false;

// || ist der logische Operator für Oder
// Er gibt true zurück, wenn mindestens einer der beiden Werte true ist
// und false zurück, wenn beide Werte false sind
istWahr || true;
istWahr || false;

// ! ist der logische Operator für Nicht
// Er gibt true zurück, wenn der Wert false ist
// und false zurück, wenn der Wert true ist
!istWahr;
```
