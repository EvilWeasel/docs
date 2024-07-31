---
title: Arrays
description: tbd
---


Ein Array in JavaScript ist ein globaler Objekttyp, der eine Liste von Elementen speichert. Sie können verschiedene Datentypen in einem Array speichern, einschließlich Zahlen, Strings, Objekte und sogar andere Arrays. Hier sind einige Beispiele:

**Array erstellen:**

```jsx
let arr = [1, 2, 3, 4, 5];  // Ein Array mit Zahlen
let arr2 = ['Hallo', 'Welt'];  // Ein Array mit Strings
let arr3 = [1, 'zwei', {name: 'Drei'}, [4]];  // Ein Array mit gemischten Typen

```

**Auf Elemente zugreifen:**

```jsx
console.log(arr[0]);  // Gibt das erste Element aus (1)
console.log(arr2[1]);  // Gibt das zweite Element aus ('Welt')

```

**Funktionen in einem Array:**

```jsx
let sayHello = function() {
    console.log('Hallo');
};

let sayWorld = function() {
    console.log('Welt');
};

let functions = [sayHello, sayWorld];

// Sie können die Funktionen dann aufrufen, indem Sie auf sie im Array zugreifen
functions[0]();  // Gibt 'Hallo' aus
functions[1]();  // Gibt 'Welt' aus
```

**Die Länge eines Arrays ermitteln:**

```jsx
console.log(arr.length);  // Gibt die Länge des Arrays aus (5)

```

**Elemente zu einem Array hinzufügen:**

```jsx
arr.push(6);  // Fügt 6 am Ende des Arrays hinzu
arr.unshift(0);  // Fügt 0 am Anfang des Arrays hinzu

```

**Elemente aus einem Array entfernen:**

```jsx
let lastElement = arr.pop();  // Entfernt das letzte Element und gibt es zurück
let firstElement = arr.shift();  // Entfernt das erste Element und gibt es zurück

```

**Durch ein Array iterieren:**

```jsx
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // Gibt jedes Element aus
}

// Oder mit der forEach-Methode
arr.forEach(function(element) {
    console.log(element);  // Gibt jedes Element aus
});

```

**Ein Array filtern:**

```jsx
let evenNumbers = arr.filter(function(num) {
    return num % 2 === 0;  // Gibt ein neues Array mit den geraden Zahlen zurück
});

```

**Ein Array transformieren:**

```jsx
let squares = arr.map(function(num) {
    return num * num;  // Gibt ein neues Array mit den Quadraten der Zahlen zurück
});

```

Diese Beispiele decken einige der grundlegendsten Operationen ab, die Sie mit Arrays in JavaScript durchführen können. Es gibt jedoch noch viele weitere Methoden und Techniken, die Sie verwenden können, um mit Arrays zu arbeiten.
