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
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script src="script.js" defer></script>
        <title>Document</title>
    </head>
    <body>
        <!-- Beginn eines Abschnitts für das Gedächtnisspiel -->
        <section class="memory-game">
            <!-- Beginn einer Speicherkarte mit dem Attribut "data-framework" gesetzt auf "beard1" -->
            <div class="memory-card" data-framework="beard1">
                <!-- Bild für die Vorderseite der Karte -->
                <img
                    class="front-face"
                    src="./assets/images/beard1.png"
                    alt="Beard1"
                />
                <!-- Bild für die Rückseite der Karte -->
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="beard2">
                <img
                    class="front-face"
                    src="./assets/images/beard2.png"
                    alt="Beard2"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="beard3">
                <img
                    class="front-face"
                    src="./assets/images/beard3.png"
                    alt="beard3"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="beard1">
                <img
                    class="front-face"
                    src="./assets/images/beard1.png"
                    alt="Beard1"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="beard2">
                <img
                    class="front-face"
                    src="./assets/images/beard2.png"
                    alt="Beard2"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="beard3">
                <img
                    class="front-face"
                    src="./assets/images/beard3.png"
                    alt="beard3"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="oldman1">
                <img
                    class="front-face"
                    src="./assets/images/oldman1.png"
                    alt="OldMan1"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="skull1">
                <img
                    class="front-face"
                    src="./assets/images/skull1.png"
                    alt="Skull1"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="skull2">
                <img
                    class="front-face"
                    src="./assets/images/skull2.png"
                    alt="Skull2"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="oldman1">
                <img
                    class="front-face"
                    src="./assets/images/oldman1.png"
                    alt="OldMan1"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="skull1">
                <img
                    class="front-face"
                    src="./assets/images/skull1.png"
                    alt="Skull1"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>

            <div class="memory-card" data-framework="skull2">
                <img
                    class="front-face"
                    src="./assets/images/skull2.png"
                    alt="Skull2"
                />
                <img
                    class="back-face"
                    src="./assets/images/pokemon.png"
                    alt="Memory Back"
                />
            </div>
        </section>
    </body>
</html>
```

**CSS:**

```css
:root {
    /* Definiert eine Größe für die Karten und einen Abstand zwischen den Karten als CSS-Variablen */
    --card-size: 14rem;
    --card-gap: 0.8rem;
}

* {
    /* Setzt das box-sizing auf border-box, um Padding und Border in die Breite und Höhe eines Elements einzubeziehen */
    /* Setzt Margin und Padding aller Elemente auf 0 */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    /* Zentriert den Inhalt auf der Seite */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* Setzt die Hintergrundfarbe auf ein dunkles Blau */
    background-color: #011016;
}

.memory-game {
    /* Stellt die Speicherkarten in einer flexiblen Box dar und zentriert sie */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* Begrenzt die Breite des Spiels und setzt die Höhe auf automatisch */
    width: 900px;
    height: auto;
    /* Setzt die Perspektive für 3D-Transformationen */
    perspective: 1000px;
}

.memory-card {
    /* Setzt die Größe und Position der Speicherkarten */
    width: calc(var(--card-size) - var(--card-gap));
    height: calc(var(--card-size) - var(--card-gap));
    margin: 4px;
    position: relative;
    /* Behält die 3D-Positionierung bei Transformationen bei */
    transform-style: preserve-3d;
    /* Fügt eine Übergangseffekt hinzu, wenn die Karte gedreht wird */
    transition: transform 0.5s;
}

.memory-card:hover {
    /* Ändert den Cursor zu einem Zeiger, wenn er über einer Karte schwebt */
    /* Verkleinert die Karte leicht und fügt einen Rand hinzu, wenn sie gehovert wird */
    cursor: pointer;
    transform: scale(0.97);
    transition: transform 0.2s;
    border: 2px solid #0e4e6e;
    border-radius: 10px;
}

.memory-card.flip {
    /* Dreht die Karte um 180 Grad, wenn die Klasse "flip" hinzugefügt wird */
    transform: rotateY(180deg);
    transition: transform 0.4s;
}

.front-face,
.back-face {
    /* Positioniert die Vorder- und Rückseite der Karten absolut */
    /* Versteckt die Rückseite der Karten, wenn sie nicht sichtbar ist */
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
}

.front-face {
    /* Dreht die Vorderseite der Karten um 180 Grad */
    transform: rotateY(180deg);
}
```

**JavaScript:**

```jsx
// Auswahl aller Elemente mit der Klasse 'memory-card'
const cards = document.querySelectorAll('.memory-card');

// Initialisierung von Variablen zur Kontrolle des Spielverlaufs
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Funktion zum Umdrehen einer Karte
function flipCard() {
    // Wenn das Spielfeld gesperrt ist oder die erste Karte bereits ausgewählt wurde, wird die Funktion beendet
    if (lockBoard) return;
    if (this === firstCard) return;

    // Fügt die Klasse 'flip' hinzu, um die Karte zu drehen
    this.classList.add('flip');

    // Überprüft, ob es sich um die erste aufgedeckte Karte handelt
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Weist die zweite Karte zu und prüft auf Übereinstimmung
    secondCard = this;
    checkForMatch();
}

// Funktion zum Überprüfen, ob zwei Karten übereinstimmen
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // Ruft entsprechende Funktion auf, abhängig davon, ob die Karten übereinstimmen oder nicht
    isMatch ? disableCards() : unflipCards();
}

// Funktion zum Deaktivieren der Klick-Events für passende Karten
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // Setzt das Spielfeld zurück
    resetBoard();
}

// Funktion zum Zurückdrehen der Karten, wenn sie nicht übereinstimmen
function unflipCards() {
    lockBoard = true;

    // Verzögert das Zurückdrehen der Karten und das Zurücksetzen des Spielfelds
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Funktion zum Zurücksetzen des Spielfelds
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Selbstaufrufende Funktion zum Mischen der Karten
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

// Hinzufügen eines Klick-EventListeners zu jeder Karte
cards.forEach(card => card.addEventListener('click', flipCard));
```