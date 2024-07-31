---
title: yield-keyword
description: yield
---

`yield*` ist eine spezielle Syntax in JavaScript, die in Generatorfunktionen verwendet wird, um die Kontrolle an eine andere Generatorfunktion oder Iterable-Objekt zu delegieren. Es wird oft in Kombination mit Generatorfunktionen verwendet, um iterierbare Elemente sequenziell oder rekursiv zu durchlaufen.

Hier ist eine grundlegende Erklärung, wie `yield*` funktioniert:

1. **Generatorfunktionen**: Eine Generatorfunktion ist eine besondere Art von Funktion in JavaScript, die mit dem Schlüsselwort `function*` definiert wird. Sie ermöglicht es, Werte schrittweise zu erzeugen, indem sie das `yield`-Statement verwendet.

2. **Delegation**: Mit `yield*` können Generatorfunktionen die Kontrolle an eine andere Generatorfunktion delegieren. Wenn eine Generatorfunktion auf ein `yield*` trifft, gibt sie die Kontrolle an eine andere Generatorfunktion oder ein Iterable-Objekt weiter.

3. **Iterieren über Iterables**: Wenn `yield*` auf ein Iterable-Objekt trifft, wird die Generatorfunktion unterbrochen, um über jedes Element des Iterables zu iterieren. Dies ermöglicht es, Werte eines Iterables schrittweise zu erzeugen, während die Kontrolle zwischen den Funktionen übergeben wird.

4. **Rekursion**: `yield*` kann auch zur rekursiven Delegation verwendet werden. Das bedeutet, dass eine Generatorfunktion die Kontrolle an eine andere Generatorfunktion delegieren kann, die wiederum die Kontrolle an eine weitere Generatorfunktion delegiert, und so weiter.

Hier ist ein einfaches Beispiel, um `yield*` zu veranschaulichen:

```javascript
function* generator1() {
  yield 'a';
  yield 'b';
}

function* generator2() {
  yield 'x';
  yield* generator1(); // Delegiere an generator1
  yield 'y';
}

const gen = generator2();
console.log(gen.next().value); // Ausgabe: 'x'
console.log(gen.next().value); // Ausgabe: 'a'
console.log(gen.next().value); // Ausgabe: 'b'
console.log(gen.next().value); // Ausgabe: 'y'
```

In diesem Beispiel delegiert `generator2` die Kontrolle an `generator1` mit `yield*`, um 'a' und 'b' zu erzeugen, bevor es mit 'y' fortfährt.
