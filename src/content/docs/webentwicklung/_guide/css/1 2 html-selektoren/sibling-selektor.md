---
title: Sibling-Selektor
description: tbd
---

Kommen wir zur letzten Art der Selektoren, den so genannten Geschwisterselektoren. Diese stehen in der Struktur des HTML-Dokumentes auf gleicher Ebene. Bedeutet innerhalb eines Elementes, befinden sich mehrere Kindselektoren. Welche dadurch wiederum Geschwisterselektoren sind.

Hier ein Beispiel zu Geschwisterselektoren…

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Nachfahrenselektoren</title>
    </head>
    <body>
        <h1>Nachfahrenselektoren</h1>
        <p>
            Lorem ipsum dolor, sit amet <b>consectetur</b> adipisicing elit.
            Fugit necessitatibus dicta exercitationem quasi aliquam itaque
            mollitia tempora fugiat veniam corporis.
        </p>
        <span
            >Exercitationem <i>suscipit</i> asperiores
            <b>illo</b> debitis,</span
        >
        <i>
            laudantium a dolores ipsa repellat veritatis hic unde odit ipsam.
        </i>
        <b>quasi aliquam itaque mollitia tempora fugiat veniam corporis.</b>
    </body>
</html>
```

Im obigen Beispiel sehen wir, das die Elemente: `<h1>`, `<p>`, `<span>`, `<i>`, `<b>` alles Kind-Elemente des `<body>` Elements sind. Somit sind sie alle Geschwisterselektoren zueinander.

Um nun ein Geschwisterselektor auszuwählen, benötigen wir das Tilde - Symbol (`~`)auf der Tastatur. Welches man mit AltGR + + aufrufen kann. 

**CSS-Beispiel:**

```css
span ~ i {
    color: #ff9100;
}
```

In der obigen CSS-Regel rufen wir das `<i>` Element auf welches **“vorausgehend”** ein Geschwisterelement `<span>` hat. Denn es können nur Geschwisterselektoren angesprochen werden, welches ein bestimmtes Element zuvor stehen hat. In diesem Beispiel `<span> <i>`.

Anders herum kann kein Geschwisterselektor aufgerufen werden. Somit kann zum Beispiel nicht

i ~ b geschrieben werden. Um von `<i>` auf `<b>` zu zugreifen. Denn das wiederum würde Bedeuten, dass wir jedes `<b>` Element ansteuern wollen, welches ein `<i>` Element vorausgehend hat.

**Ausgabe im Browser:**

![Untitled](1%202%206%20Geschwisterselektoren%200f90861aa1cd4679b8285e0cab007b7e/Untitled.png)

Hierbei ist Wichtig zu beachten. Das alle, in diesem Beispiel, nachfolgenden `<i>` Elemente angesprochen werden. Also alle die nach `<span>` folgen würden.
