---
title: Typselektoren
description: tbd
---


Typselektoren haben wir im Grunde schon kennengelernt und auch benutzt. Ebenfalls hatte ich diese Selektoren schon kurz angesprochen in den Grundlagen. 

Doch was sind diese nun genau.

Typselektoren werden innerhalb von `Internal` und `External CSS` dazu verwendet, um auf `Elemente` innerhalb des `HTML-Dokumentes` in der das Stylesheet Verwendung findet, zu zugreifen. 

 

**Hier ein Beispiel:**

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Typselektoren</title>
    </head>
    <body>
        <h1>Typselektoren</h1>
        <p>
            Lorem ipsum dolor, sit amet <b>consectetur</b> adipisicing elit.
            Fugit necessitatibus dicta exercitationem quasi aliquam itaque
            mollitia tempora fugiat veniam corporis.
            <span>Exercitationem <i>suscipit</i> asperiores illo debitis,</span>
            laudantium a dolores ipsa repellat veritatis hic unde odit ipsam
            explicabo quia recusandae! Exercitationem mollitia eaque distinctio
            voluptatibus itaque, numquam nam aperiam quasi magnam repudiandae.
        </p>
    </body>
</html>
```

**CSS:**

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #011016;
    color: white;
}

h1 {
    color: #ff9100;
    margin-bottom: 1rem;
}

p {
    color: #7bff00;
    width: 20rem;
}

span {
    color: #b9078d;
}

b {
    color: #7dfff8;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%201%20Typselektoren%2068b7ec795f554602b25f58f0e78ea577/Untitled.png)

Wie man im obigen Beispiel sehen kann, beziehen sich die Selektoren alle auf die jeweiligen Tag-Elemente innerhalb des HTML-Dokumentes. Wobei hier eine kleine Besonderheit aufgezeigt ist, auf die wir später noch genauer eingehen werden. 

Bei der Erstellung von CSS muss auch darauf geachtet werden. Das diese auch Vererbt werden.

Bedeutet konkret, das wenn wir im `<body>` Element, die Schriftfarbe angeben, dann wird diese an jedes Kind und Kindeskind Element weitergegeben.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Typselektoren</title>
    </head>
    <body>
        <h1>Typselektoren</h1>
        <p>
            Lorem ipsum dolor, sit amet <b>consectetur</b> adipisicing elit.
            Fugit necessitatibus dicta exercitationem quasi aliquam itaque
            mollitia tempora fugiat veniam corporis.
            <span>Exercitationem <i>suscipit</i> asperiores illo debitis,</span>
            laudantium a dolores ipsa repellat veritatis hic unde odit ipsam
            explicabo quia recusandae! Exercitationem mollitia eaque distinctio
            voluptatibus itaque, numquam nam aperiam quasi magnam repudiandae.
        </p>
    </body>
</html>
```

Bedeutet, wenn wir uns das `<body>` Element anschauen, so stellen wir fest das es zwei Kind-Elemente hat. Einmal das `<h1>` Element und das `<p>` Element. Das `<p>` Element hat wiederum auch nochmal zwei Kind-Elemente. Einmal das `<b>` Element und `<span>` Element. Letzteres hat ebenfalls ein Kind-Element, das `<i>` Element.

Somit wird die Farbangabe, welche im `<body>` Element definiert wurde, an alle Kind und Kindskind-Elemente weitervererbt. Womit der der gesamte Inhalt des HTML-Dokumentes in ein und der selben Farbe dargestellt wird. 

ACHTUNG: Die Vererbung funktioniert nur in eine Richtung. 

( body → h1 )

( body → p )

Wobei die Kind-Elemente des `<p>` Tags keine Vererbung durch Body erhalten.

Hier müsste wiederum im `<p>` Tag eine Border angegeben werden, damit diese an die Kind-Elemente weitervererbt werden können.

Andersrum wird diese Art der Vererbung nicht funktionieren, das Kind-Element kann nicht an sein Eltern-Element weitergeben. 

Genauso gibt es einige CSS-Attribute welche nicht Vererbt werden, wie z.B. das `border:`

Dieses wird z.B. wenn es im `<body>` definiert wird, nicht an die Kind und KindesKind-Elemente weitervererbt.

**Hier ein Beispiel:**

**CSS-Style:**

```css
html,
body {
    height: 100%;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #011016;
    color: white;

/* Border */
    border: solid 4px red;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%201%20Typselektoren%2068b7ec795f554602b25f58f0e78ea577/Untitled%201.png)

In der Ausgabe sehen wir, das um den gesamten HTML bzw. Body eine 4px großer Rahmen gezogen wurde. Allerdings wurde dieser, wie schon gesagt nicht Vererbt.

Man kann allerdings mithilfe des Wertes “inherit” ( zD. Vererbung ), solche Attribute dennoch an das Kind Element weitergeben.

**CSS-Beispiel:**

```css
html,
body {
    height: 100%;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #011016;
    color: white;

    /* Border */
    border: solid 4px red;
}

h1 {
    /* Border-Vererbung von Body */
    border: inherit;

    color: #ff9100;
    margin-bottom: 1rem;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%201%20Typselektoren%2068b7ec795f554602b25f58f0e78ea577/Untitled%202.png)

INFO: Der Rahmen des HTML und Body erscheint dicker, da er auf das HTML-Element als auch auf das Body-Element angewendet wird.