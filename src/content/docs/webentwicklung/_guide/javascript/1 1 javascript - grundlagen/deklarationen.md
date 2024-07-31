---
title: Deklarationen
description: tbd
---


In JavaScript gibt es drei Schlüsselwörter, um Variablen zu deklarieren: `var`, `let` und `const`. Sie unterscheiden sich in ihrer Funktionsweise und Verwendung.

1. `var`: Dies ist die älteste Art, Variablen in JavaScript zu deklarieren. Variablen, die mit `var` deklariert werden, haben eine Funktionsebene oder globale Gültigkeit, abhängig davon, wo sie deklariert werden.

```jsx
var x = 1;
if (true) {
    var x = 2;  // Gleiche Variable!
    console.log(x);  // 2
}
console.log(x);  // 2

```

1. `let`: Dieses Schlüsselwort wurde mit ES6 eingeführt. Variablen, die mit `let` deklariert werden, haben eine Blockebene. Das bedeutet, dass sie nur innerhalb des Blocks, der Schleife oder der Ausdrucksanweisung gültig sind, in dem sie deklariert werden.

```jsx
let y = 1;
if (true) {
    let y = 2;  // Unterschiedliche Variable
    console.log(y);  // 2
}
console.log(y);  // 1

```

1. `const`: Dieses Schlüsselwort wurde ebenfalls mit ES6 eingeführt. Es hat die gleiche Blockebene wie `let`, aber es definiert eine Konstante, d.h. eine Variable, deren Wert nach der Erstzuweisung nicht mehr geändert werden kann.

```jsx
const z = 1;
z = 2;  // Fehler, da der Wert einer Konstante nicht geändert werden kann

```

Es ist wichtig zu beachten, dass `const` nicht bedeutet, dass der Wert, auf den es zeigt, unveränderlich ist, nur dass die Variable selbst nicht neu zugewiesen werden kann. Zum Beispiel, wenn die Konstante ein Objekt oder ein Array ist, können die Elemente oder Eigenschaften des Objekts oder Arrays immer noch geändert werden.

```jsx
const arr = [1, 2, 3];
arr.push(4);  // Das ist erlaubt
arr = [];  // Fehler, da eine Konstante nicht neu zugewiesen werden kann

```
