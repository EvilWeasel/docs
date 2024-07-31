---
title: Datentypen
description: tbd
---


Programme, Apps, Spiele etc. basieren auf der Manipulation von Werten wie z.B. der Zahl PI 3.14...
Oder aber auch Text wie z.B. "Hallo Welt!". Diese Werte werden in Variablen gespeichert. Variablen sind Container für Werte. Diese Werte können dann in einem Programm verwendet werden. Variablen können auch zur Laufzeit verändert werden. Die Werte die in einer Programmiersprache verwendet werden, nennt man Typen. Wenn ein Programm, Werte verarbeiten soll, muss es wissen um welchen Typ es sich handelt. Es gibt verschiedene Typen von Werten. Einen Auszug der wichtigsten Typen sind:

```
- String
- Number
- Boolean
- Array
- Object
- Function
- Symbol
- undefined
- null
- NaN
- ....
```

Diese Werte werden dann in einer Variable gespeichert oder weist diese einer Variable zu. Eine Variable wird durch einen "symbolischen" Namen definiert um über diesen, den Wert der Variable zu referenzieren.

Die Typen von JavaScript können generell in zwei Kategorien eingeteilt werden. Primitive Typen (Elementare Typen) und Objekt Typen (Komplexe Typen). Zu den primitiven Typen gehören z.B. String, Zahlen, Booleans, null und undefined. Zu den Objekt Typen gehören z.B. Arrays, Funktionen und Objekte.

In Javascript gibt es allerdings keine direkte Typzuweisung bei Variablen. Die Typen werden implizit zugewiesen. Das bedeutet, dass der Typ der Variable automatisch erkannt wird. Der Typ einer Variable kann sich auch zur Laufzeit ändern. Das bedeutet, dass eine Variable zuerst einen String enthalten kann und später einen Boolean. Das ist aber nicht zu empfehlen. Es ist besser, wenn eine Variable immer den gleichen Typ hat. Das erleichtert die Lesbarkeit des Codes und verhindert Fehler.

Zu beachten ist auch die Unterscheidung von globalen Variablen oder Funktionsbezogenen Variablen. Variablen die außerhalb einer Funktion definiert werden, sind global. Variablen die innerhalb einer Funktion definiert werden, sind funktionsbezogen. Variablen die innerhalb einer Funktion definiert werden, können nur innerhalb dieser Funktion verwendet werden. Variablen die außerhalb einer Funktion definiert werden, können überall verwendet werden. Variablen die innerhalb einer Funktion definiert werden, können auch den gleichen Namen haben wie Variablen die außerhalb einer Funktion definiert werden. Diese Variablen sind dann aber nicht die gleichen. Sie sind nur zufällig gleich benannt. Variablen die innerhalb einer Funktion definiert werden, überschreiben nicht die Variablen die außerhalb einer Funktion definiert werden. Variablen die außerhalb einer Funktion definiert werden, können aber von Funktionen verwendet werden. Variablen die innerhalb einer Funktion definiert werden, können nicht von außerhalb der Funktion verwendet werden.

**Code-Beispiel:**

```jsx
let zahl = 21;
```

In diesem Beispiel deklarieren wir eine Variable mit dem Namen “zahl”. Anschließend initialisieren wir diese Variable mit dem Wert 21.

**Code-Beispiel:**

```jsx
# globale Variable
let zahl = 42;

function Ausgabe() {
	let zahl = 21;
}
```
