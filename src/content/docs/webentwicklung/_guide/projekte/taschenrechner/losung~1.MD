# Lösung

Owner: Frank McDonald
Last edited time: 27. Juli 2023 11:58
Category: HTML/CSS (https://www.notion.so/HTML-CSS-ef2a04213ae54c5fa9ea5944bba30f19?pvs=21)
Created time: 21. Juli 2023 15:21

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Verknüpft die externe CSS-Datei "style.css" -->
        <link rel="stylesheet" href="style.css" />
        <!-- Verknüpft die externe JavaScript-Datei "script.js" und definiert das Verhalten als "deferred" -->
        <script src="script.js" defer></script>
        <!-- Titel des Dokuments -->
        <title>Taschenrechner</title>
    </head>
    <body>
        <div class="wrapper">
            <!-- Überschrift für den Taschenrechner -->
            <h1>Taschenrechner</h1>
            <div id="calculator">
                <!-- Label für das Eingabefeld "display" -->
                <label for="display" />
                <!-- Eingabefeld "display" für die Eingabe von Zahlen -->
                <input type="text" id="display" value="" disabled />
                <!-- Eingabefeld "displayResult" zur Anzeige des Ergebnisses -->
                <input type="text" id="displayResult" value="" disabled />
                <div id="buttons">
                    <!-- Button für den Prozentwert -->
                    <button id="percent">%</button>
                    <!-- Button zum Löschen des aktuellen Eintrags -->
                    <button id="clearEntry">CE</button>
                    <!-- Button zum Löschen aller Einträge -->
                    <button id="clear">C</button>
                    <!-- Button für die Division -->
                    <button class="operator" value="/">/</button>
                    <!-- Button für die Zahl 7, 8, 9-->
                    <button class="num" value="7">7</button>
                    <button class="num" value="8">8</button>
                    <button class="num" value="9">9</button>
                    <!-- Button für die Multiplikation -->
                    <button class="operator" value="*">*</button>
                    <!-- Button für die Zahl 4, 5, 6 -->
                    <button class="num" value="4">4</button>
                    <button class="num" value="5">5</button>
                    <button class="num" value="6">6</button>
                    <!-- Button für die Subtraktion -->
                    <button class="operator" value="-">-</button>
                    <!-- Button für die Zahl 1, 2, 3 -->
                    <button class="num" value="1">1</button>
                    <button class="num" value="2">2</button>
                    <button class="num" value="3">3</button>
                    <!-- Button für die Addition -->
                    <button class="operator" value="+">+</button>
                    <!-- Button zum Wechseln des Vorzeichens -->
                    <button id="plusMinus">+/-</button>
                    <!-- Button für die Zahl 0 -->
                    <button class="num" value="0">0</button>
                    <!-- Button für das Dezimaltrennzeichen -->
                    <button class="num" value=".">,</button>
                    <!-- Button zum Ausführen der Berechnung -->
                    <button id="equals">=</button>
                </div>
            </div>
        </div>
    </body>
</html>
```

**CSS:**

```css
/* Farbvariablen */
:root {
    --bg-color: #d6cd9a; /* Hintergrundfarbe */
    --text-color: #363261; /* Textfarbe */
    --button-color: #232041; /* Button-Farbe */
    --light-text-color: #8a86ba; /* Helle Textfarbe */
    --light-beige-color: #fff8d1; /* Helle Beigefarbe */
    --light-beige-color-hover: #fcda6a; /* Helle Beigefarbe beim Hovern */
    --dark-beige-color: #8a8255; /* Dunkle Beigefarbe */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    font-family: 'Fira Code', monospace; /* Schriftart für das gesamte Dokument */
    color: var(--text-color); /* Textfarbe */
    background-color: var(--bg-color); /* Hintergrundfarbe */
    width: 100vw; /* Breite des Viewports */
    height: 100vh; /* Höhe des Viewports */
    display: flex; /* Flexibles Layout */
    justify-content: center; /* Zentrierte Ausrichtung horizontal */
    align-items: center; /* Zentrierte Ausrichtung vertikal */
}

h1 {
    color: var(--light-text-color); /* Helle Textfarbe */
    margin-bottom: 1rem; /* Abstand nach unten */
}

.wrapper {
    display: flex; /* Flexibles Layout */
    flex-direction: column; /* Anordnung der Elemente in Spalten */
    align-items: center; /* Zentrierte Ausrichtung horizontal */
    background-color: #011016; /* Hintergrundfarbe */
    padding: 1rem; /* Innenabstand */
    border-radius: 10px; /* Abrundung der Ecken */
}

#calculator {
    width: 200px; /* Breite des Taschenrechners */
}

#display {
    width: 100%; /* Breite des Anzeigefelds */
    height: 30px; /* Höhe des Anzeigefelds */
    text-align: right; /* Ausrichtung des Texts nach rechts */
    background-color: var(--text-color); /* Hintergrundfarbe */
    color: var(--light-beige-color); /* Textfarbe */
    border-radius: 8px 8px 0 0; /* Abrundung der oberen Ecken */
    padding: 0 4px; /* Innenabstand */
}

#displayResult {
    width: 100%; /* Breite des Ergebnisfelds */
    height: 50px; /* Höhe des Ergebnisfelds */
    text-align: right; /* Ausrichtung des Texts nach rechts */
    background-color: var(--text-color); /* Hintergrundfarbe */
    color: var(--light-beige-color); /* Textfarbe */
    margin-bottom: 10px; /* Abstand nach unten */
    border-radius: 0 0 8px 8px; /* Abrundung der unteren Ecken */
    padding: 0 4px; /* Innenabstand */
    font-size: 2rem; /* Schriftgröße */
    font-weight: bolder; /* Fettschrift */
}

#buttons {
    display: grid; /* Grid-Layout */
    gap: 0.2rem; /* Abstand zwischen den Elementen */
    grid-template-columns: repeat(4,1fr); /* Anzahl der Spalten und ihre Breite */
}

button {
    width: 100%; /* Breite des Buttons */
    height: 50px; /* Höhe des Buttons */
    border: none; /* Kein Rahmen */
    border-radius: 5px; /* Abrundung der Ecken */
    background-color: var(--button-color); /* Hintergrundfarbe */
    color: var(--light-beige-color); /* Textfarbe */
    font-size: 1.2rem; /* Schriftgröße */
    cursor: pointer; /* Zeiger beim Hovern */
    transition: all 0.2s ease-in-out; /* Übergangseffekt */
}

button:hover {
    background-color: var(--light-beige-color-hover); /* Hintergrundfarbe beim Hovern */
    color: var(--light-text-color); /* Textfarbe beim Hovern */
    transform: scale(1.02); /* Skalierung beim Hovern */
}

button:active {
    background-color: var(--dark-beige-color); /* Hintergrundfarbe beim Klicken */
    color: var(--light-text-color); /* Textfarbe beim Klicken */
}

.transparent {
    background-color: transparent; /* Transparenter Hintergrund */
    border: none; /* Kein Rahmen */
}

button.transparent:hover {
    background-color: transparent; /* Transparenter Hintergrund beim Hovern */
    cursor: default; /* Standardzeiger beim Hovern */
}
```

**JavaScript:**

```jsx
// Zugriff auf die HTML-Elemente
let display = document.getElementById('display'); // Anzeigefeld
let displayResult = document.getElementById('displayResult'); // Ergebnisfeld
let numbers = document.getElementsByClassName('num'); // Zahlentasten
let operators = document.getElementsByClassName('operator'); // Operator-Tasten
let clear = document.getElementById('clear'); // Clear-Taste
let clearEntry = document.getElementById('clearEntry'); // CE-Taste
let equals = document.getElementById('equals'); // Gleichheitszeichen-Taste
let plusMinus = document.getElementById('plusMinus'); // Plus-Minus-Taste
let percent = document.getElementById('percent'); // Prozent-Taste

// Variablen für Berechnungen
let result = null; // Ergebnisvariable
let currentOperator = null; // Aktueller Operator
let operand = null; // Operand

// Event-Listener für Zahlentasten
for (let number of numbers) {
    number.addEventListener('click', function () {
        display.value += this.value; // Fügt die Zahl zum Anzeigefeld hinzu
    });
}

// Event-Listener für Operator-Tasten
for (let operator of operators) {
    operator.addEventListener('click', function () {
        if (display.value !== '' && !display.value.includes(' ')) {
            operand = display.value; // Setzt den Operanden
            currentOperator = this.value; // Setzt den aktuellen Operator
            display.value += ' ' + currentOperator + ' '; // Fügt den Operator zum Anzeigefeld hinzu
        }
    });
}

// Event-Listener für die Gleichheitszeichen-Taste
equals.addEventListener('click', function () {
    let calculation = display.value.split(' '); // Teilt das Anzeigefeld in Operand, Operator und zweiten Operand
    if (calculation.length === 3) {
        operand = calculation[0]; // Setzt den Operanden
        currentOperator = calculation[1]; // Setzt den aktuellen Operator
        let secondOperand = calculation[2]; // Setzt den zweiten Operanden

        // Durchführt die Berechnung basierend auf dem Operator
        switch (currentOperator) {
            case '+':
                result = parseFloat(operand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(operand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(operand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(operand) / parseFloat(secondOperand);
                break;
        }
        displayResult.value = result; // Zeigt das Ergebnis an
        console.log(result); // Loggt das Ergebnis
        currentOperator = null; // Setzt den aktuellen Operator zurück
        operand = null; // Setzt den Operanden zurück
    }
});

// Event-Listener für die Clear-Taste
clear.addEventListener('click', function () {
    display.value = ''; // Leert das Anzeigefeld
    displayResult.value = ''; // Leert das Ergebnisfeld
    currentOperator = null; // Setzt den aktuellen Operator zurück
    operand = null; // Setzt den Operanden zurück
});

// Event-Listener für die Plus-Minus-Taste
plusMinus.addEventListener('click', function () {
    if (display.value !== '' && !isNaN(display.value)) {
        display.value = parseFloat(display.value) * -1; // Wechselt das Vorzeichen der Zahl im Anzeigefeld
    }
});

// Event-Listener für die CE-Taste
clearEntry.addEventListener('click', function () {
    let entries = display.value.split(' '); // Teilt das Anzeigefeld in seine Einträge
    if (entries.length > 1) {
        entries.pop(); // Entfernt den letzten Eintrag
        display.value = entries.join(' '); // Fügt die verbleibenden Einträge wieder zusammen
    } else {
        display.value = ''; // Leert das Anzeigefeld, wenn nur ein Eintrag vorhanden war
    }
});

// Event-Listener für die Prozent-Taste
percent.addEventListener('click', function () {
    if (display.value !== '' && !isNaN(display.value)) {
        display.value = parseFloat(display.value) / 100; // Teilt die Zahl im Anzeigefeld durch 100
    }
});
```