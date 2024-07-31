# Code-Beispiele

Owner: Frank McDonald
Last edited time: 27. Juli 2023 11:57
Category: JavaScript (https://www.notion.so/JavaScript-65caadae6ede469fb432fbd313ff4474?pvs=21)
Created time: 21. Juli 2023 15:21

**Leichte Fragen:**

1 Unterschied zwischen `var`, `let` und `const`:

```jsx
var x = 1; // var kann in der gesamten Funktion gesehen werden, in der sie deklariert wurde
let y = 2; // let ist block-scoped, d.h. sie kann nur innerhalb des Blocks gesehen werden, in dem sie deklariert wurde
const z = 3; // const ist auch block-scoped, aber ihr Wert kann nach der Deklaration nicht mehr geändert werden

```

2 Funktionserstellung:

```jsx
// Eine Funktion erstellen
function sayHello() {
    console.log("Hallo Welt!");
}
// Die Funktion aufrufen
sayHello();

```

3 Schleifen:

```jsx
// for-Schleife
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while-Schleife
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

```

4 Array-Erstellung:

```jsx
// Ein Array erstellen
let fruits = ["Apfel", "Banane", "Kirsche"];

```

5 Zugriff auf ein Element in einem Array:

```jsx
// Zugriff auf das erste Element im Array
console.log(fruits[0]); // Gibt "Apfel" aus

```

6 Objekterstellung:

```jsx
// Ein Objekt erstellen
let person = {
    name: "Max",
    age: 30
};

```

7 Zugriff auf eine Eigenschaft eines Objekts:

```jsx
// Zugriff auf die Eigenschaft "name" des Objekts
console.log(person.name); // Gibt "Max" aus

```

8 Unterschied zwischen `==` und `===`:

```jsx
// == überprüft nur den Wert
console.log(1 == "1"); // Gibt true aus

// === überprüft den Wert und den Typ
console.log(1 === "1"); // Gibt false aus

```

9 Fehler mit `try` / `catch` abfangen:

```jsx
try {
    // Versuchen, einen Codeblock auszuführen
    console.log(nonExistentVariable);
} catch (error) {
    // Fehler abfangen und ausgeben
    console.log(error);
}

```

10 Verwendung von `if` / `else` Anweisungen:

```jsx
let number = 10;

if (number > 5) {
    console.log("Die Zahl ist größer als 5.");
} else {
    console.log("Die Zahl ist 5 oder kleiner.");
}

```

**Fortgeschrittene Fragen:**

1 Closure:

```jsx
// Eine Funktion, die eine andere Funktion zurückgibt
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outerVariable:', outerVariable);
        console.log('innerVariable:', innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Logs: "outerVariable: outside" and "innerVariable: inside"

```

2 Unterschied zwischen Funktionserklärung und Funktionsausdruck:

```jsx
// Funktionserklärung
function add(a, b) {
    return a + b;
}

// Funktionsausdruck
const subtract = function(a, b) {
    return a - b;
}

```

3 Verwendung von Promises:

```jsx
let promise = new Promise(function(resolve, reject) {
    // Einige asynchrone Operation

    if (/* alles hat geklappt */) {
        resolve("Erfolg!");
    }
    else {
        reject(Error("Fehler!"));
    }
});

promise.then(function(result) {
    console.log(result); // "Erfolg!"
}, function(err) {
    console.log(err); // Error: "Fehler!"
});

```

4 Unterschied zwischen `null` und `undefined`:

```jsx
let a;
console.log(a); // undefined, da keine Wertzuweisung erfolgt ist

let b = null;
console.log(b); // null, da explizit kein Wert zugewiesen wurde

```

5 Verwendung von `map()`, `filter()` und `reduce()`:

```jsx
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(n => n * n); // [1, 4, 9, 16, 25]

let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

let sum = numbers.reduce((total, n) => total + n, 0); // 15

```

6 Synchrones vs. Asynchrones JavaScript:

```jsx
console.log("Start"); // Synchron

setTimeout(function() {
    console.log("Mitte"); // Asynchron
}, 0);

console.log("Ende"); // Synchron
// Die Ausgabe wird sein: "Start", "Ende", "Mitte"

```

7 Verwendung von `async` / `await`:

```jsx
async function fetchData() {
    let response = await fetch('<https://api.example.com/data>');
    let data = await response.json();
    console.log(data);
}

fetchData();

```

8 Erstellung und Verwendung eines Prototyps:

```jsx
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Max", "Mustermann", 30);
console.log(person1.fullName()); // "Max Mustermann"

```

9 Event Loop:

```jsx
console.log('Start'); // Schritt 1

setTimeout(function() {
    console.log('Timeout'); // Schritt 3
}, 0);

Promise.resolve().then(function() {
    console.log('Promise'); // Schritt 2
});

console.log('Ende'); // Schritt 1

```

10 Arrow Function:

```jsx
// Reguläre Funktion
function add(a, b) {
    return a + b;
}

// Arrow Function
const subtract = (a, b) => a - b;

```