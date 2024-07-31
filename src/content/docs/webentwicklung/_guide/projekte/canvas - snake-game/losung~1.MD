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
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <script type="module" src="./script.js" defer></script>
        <title>Snake-Game</title>
    </head>
    <body>
        <div class="container">
            <canvas id="canvas1"></canvas>
        </div>
    </body>
</html>
```

**CSS:**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000c11;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

canvas {
    background-color: #022232;
    position: absolute;
    border: 1px solid #fff;
    border-radius: 12px;
    overflow: hidden;
}
```

**JavaScript:**

```jsx
// Canvas Element wird geholt
let canvas = document.getElementById("canvas1");
// Kontext des Canvas wird festgelegt
let ctx = canvas.getContext("2d");

// Breite und Höhe des Canvas werden definiert
canvas.width = 600;
canvas.height = 600;

// Größe der Spielboxen
let box = 20;
// Anzahl der Spielboxen im Spielfeld
let playGround = 20;

// Farben für die Schlange
let colors = ["#ff0000aa", "#ff8800aa", "#ffff00aa", "#00ff00aa", "#0000ffaa", "#440099aa", "#ff77ffaa"];

// Schlange initialisieren
let snake = [];
snake[0] = { x: playGround / 2 * box, y: playGround / 2 * box };

// Futter initialisieren
let food = {
    x: Math.floor(Math.random() * playGround) * box,
    y: Math.floor(Math.random() * playGround) * box
};

// Punktzahl initialisieren
let score = 0;

// Richtung initialisieren
let direction;

// Event Listener für Tastendrücke
document.addEventListener("keydown", directionHandler);

// Funktion zur Handhabung der Richtungsänderungen
function directionHandler(event) {
    let key = event.keyCode;

    switch (key) {
        case 37:
            if (direction == "LEFT") { return; }
            if (direction != "RIGHT") {
                direction = "LEFT";
            }
            break;
        case 38:
            if (direction == "UP") { return; }
            if (direction != "DOWN") {
                direction = "UP";
            }
            break;
        case 39:
            if (direction == "RIGHT") { return; }
            if (direction != "LEFT") {
                direction = "RIGHT";
            }
            break;
        case 40:
            if (direction == "DOWN") { return; }
            if (direction != "UP") {
                direction = "DOWN";
            }
            break;
    }

    // Bewegung der Schlange und Zeichnen des Spiels
    moveSnake();
    draw();
}

// Kollisionsüberprüfung
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

// Bewegung der Schlange
function moveSnake() {
    // Alte Kopfposition speichern
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Neue Kopfposition berechnen
    if (direction == "LEFT") snakeX -= box;
    if (direction == "UP") snakeY -= box;
    if (direction == "RIGHT") snakeX += box;
    if (direction == "DOWN") snakeY += box;

    // Überprüfen ob Schlange das Futter frisst
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * playGround) * box,
            y: Math.floor(Math.random() * playGround) * box
        }
    } else {
        snake.pop();
    }

    // Neuen Kopf erstellen
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Spielende überprüfen
    if (snakeX < 0 || snakeX > canvas.width - box || snakeY < 0 || snakeY > canvas.height - box || collision(newHead, snake)) {
        clearInterval(game);
        alert("Game Over");
    }

    // Neuen Kopf zur Schlange hinzufügen
    snake.unshift(newHead);

    // Spiel zeichnen
    draw();
}

// Zeichnen des Spiels
function draw() {
    // Hintergrund zeichnen
    ctx.fillStyle = "#011016";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Schlange zeichnen
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'white';
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Futter zeichnen
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Punktzahl anzeigen
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);

    // Rand zeichnen
    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Richtung anzeigen
    ctx.fillStyle = "white";
    ctx.font = "20px Changa one";
    ctx.fillText(direction, 2 * box, 3 * box);

}

// Spiel starten
let game = setInterval(moveSnake, 500);
```