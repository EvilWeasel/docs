---
title: Numbers
description: tbd
---


## Zahlen

Anders als in manch anderen Programmiersprachen, macht JavaScript keinen Unterschied zu "Ganzzahlen" (Integer oder kurz int) und "Flieskommazahlen" (float). In JavaScript werden alle Zahlen als Flieskommazahlen dargestellt. Welche dann als 64-Bit-Gleitkommazahl nach IEEE-Standard 754 definiert werden. Wobei hier zu beachten ist das JavaScript bestimmte Operationen, wie die Indizierung von Arrays als 32-Bit-Gleitkommazahl berechnet. Das bedeutet, dass es zu Rundungsfehlern kommen kann. Beachten Sie bitte das jedem Zahlliteral ein Minuszeichen (-) vorangestellt werden kann. Um die Zahl negativ darzustellen. Wenn kein Minuszeichen vorangestellt wird, ist die Zahl positiv.

```markdown
# Zahlliteral

Eine Zahl in einem JavaScript Code wird als Zahlliteral bezeichnet.
Ein Zahlliteral ist ein Ausdruck in der Programmierung, 
der eine feste numerische Wert darstellt.
Es ist eine Möglichkeit, eine Zahl direkt im Quellcode zu schreiben,
anstatt sie aus einer Variablen oder einem anderen Ausdruck abzuleiten.

In der Regel werden Zahlliterale verwendet, 
um Konstanten oder fest definierte Werte in den Code einzubetten.
Zum Beispiel könnte man ein Zahlliteral verwenden, 
um die Anzahl der Elemente in einer Liste oder die Größe eines Arrays anzugeben.
In vielen Programmiersprachen gibt es auch verschiedene Arten von Zahlliteralen,
wie z.B. Ganzzahlen, Gleitkommazahlen oder Hexadezimalzahlen.

# Ganzzahlen
1024

# Gleitkommazahlen
Bitte daran Denken das innerhalb von Programm-Code das Komma als Punkt angegeben wird. 
Es wird nur Umgangssprachlich als Komma bezeichnet.
3.14

# Hexadezimalzahlen
0xFF = 255

# Binärzahlen
0b1010 = 10
```

In JavaScript arbeiten Zahlen, mit den Rechen-Operatoren oder besser bekannt als Arithmetische Operatoren.

Diese Operatoren sind Plus, Minus, Multiplizieren, Dividieren sowie Modulo und Potenzierung.

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

Es gibt auch komplexe Mathematische Operatoren in JavaScript und anderen Programmiersprachen. Hier ein kurzer Auszug der wichtigsten Mathematischen Operatoren:

```jsx
# Mathematische Operatoren
Math.pow(2,53) => 9007199254740992 // 2 hoch 53
Math.round(.6) => 1 // Rundet auf
Math.ceil(.6) => 1 // Rundet auf
Math.floor(.6) => 0 // Rundet ab
Math.abs(-5) => 5 // Betrag einer Zahl. Der Wert wird immer positiv dargestellt.
Math.max(1,2,3) => 3 // Gibt den höchsten Wert zurück
Math.min(1,2,3) => 1 // Gibt den niedrigsten Wert zurück
Math.random() => 0.123456789 // Gibt eine Zufallszahl zwischen 0 und 1 zurück
Math.PI => 3.141592653589793 // Gibt die Zahl PI zurück
Math.E => 2.718281828459045 // Gibt die Eulersche Zahl zurück
Math.sqrt(3) => 1.7320508075688772 // Gibt die Quadratwurzel zurück
Math.pow(3, 1/3) => 1.4422495703074083 // Gibt die Kubikwurzel zurück
Math.sin(0) => 0 // Gibt den Sinus zurück
Math.log(10) => 2.302585092994046 // Gibt den Logarithmus zurück
Math.log(100)/Math.LN10 => 2.302585092994046 // Gibt den Logarithmus zurück
Math.log(512)/Math.LN2 => 9 // Gibt den Logarithmus zurück
Math.exp(3) => 20.085536923187668 // Gibt den Exponenten zurück
```

In JavaScript werden keine Fehler ausgegeben bei arithmetischen Operatoren, sobald es zu positiven oder negativen Wertüberläufen kommt. Ist das Ergebnis einer Operation, eine Zahl die größer als die größte darstellbare Zahl ist. So ist das Ergebnis ein spezieller Wert von Unendlich. Und wird in JavaScript als "Infinity" angezeigt. Sollte es sich um eine negative Zahl handeln dann "-infinity". Ebenfalls wirft die Division durch Null kein Fehler. Sie liefert auch einen Wert von "Infinity" oder "-Infinity" zurück. Allerdings gibt es eine Ausnahme, wenn man Null durch null teilt. Dann wird der Wert "NaN" zurückgegeben. "NaN" steht für "Not a Number". Das bedeutet, dass das Ergebnis der Operation nicht als Zahl dargestellt werden kann.

NaN hat in JavaScript eine Sonderstellung. Dieser Wert ist keinem anderen gleich, nicht einmal zu sich selbst.
Bedeutet man kann den Wert von NaN nicht mit "x == NaN" prüfen. Stattdessen sollte man "x != x" verwenden. Dieser Wert ist nur dann Wahr, wenn x gleich NaN ist. Alternativ dazu kann man auch "isNaN(x)" verwenden. isNaN prüft ob der Wert von x nicht eine Zahl ist. Wenn der Wert von x keine Zahl ist, dann ist das Ergebnis von isNaN wahr. Wenn der Wert von x eine Zahl ist, dann ist das Ergebnis von isNaN falsch.
