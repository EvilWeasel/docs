---
title: Verkettung - Concatenation
desciption: tbd
---

Was bedeutet Konkatenation und für was brauche ich das Überhaupt.

Im unteren Beispiel sehen wir drei Variablen, welche mit zwei unterschiedlichen Arten der Konkatenation zusammen gefügt werden. 

```jsx
//#region Konkatiniation
let vorName = "Max";
let nachName = "Mustermann";
let alter = 42;

// Konkatination und Ausgabe in der Console
// Der + Operator kann auch zum Verketten von Strings verwendet werden
// Dabei werden die Strings aneinandergehängt
console.log(vorName + " " + nachName + " ist " + alter + " Jahre alt.");

// Template Strings
// Template Strings sind Strings, die Variablen enthalten können
// Sie werden mit Backticks ( ` ) definiert. (links neben der Backspace-Taste)
// Variablen werden mit ${variable} in den String eingefügt
// Template Strings können auch Zeilenumbrüche enthalten "\n"

console.log(`${vorName} ${nachName} ist ${alter} Jahre alt.`);
```

Die Konkatenation erfolgt entweder über den “Plus-Operator”, denn dieser hat nicht nur die Eigenschaft, zahlen zu addieren, zu inkrementieren. Sondern diese auch zusammen zu setzten, das sogenannte Konkatenieren.

Eine weitere Möglichkeit der Konkatenation ist Daten, Variablen, Objekte etc. per `${}` innerhalb einer Anweisung mit “Backticks” ``` zu verknüpfen.

Es kommt immer auf die Situation an, welche Variante er Konkatenation man verwendet.
