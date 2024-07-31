---
title: Nachfahrenselektoren
description: tbd
---

Diese Art der Selektoren, sind ähnlich zu den Kindselektoren. Nur das diese nicht wie Kindselektoren mit einem “größer als” (`>`) aneinander gereiht werden.

Die Nachfahrenselektoren sind etwas lockerer gehalten und können alle Kind Elemente eines Typselektors auswählen. Hier ein konkretes Beispiel.

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
            <span
                >Exercitationem <i>suscipit</i> asperiores
                <b>illo</b> debitis,</span
            >
            laudantium a dolores ipsa repellat veritatis hic unde odit ipsam.
        </p>
        <span>Lorem ipsum dolor, sit amet</span>
    </body>
</html>
```

**Ausgabe im Browser:**

Ohne eine CSS-Regel, ist die Ausgabe folgendermaßen…

![Untitled](1%202%205%20Nachfahrenselektoren%205dbfb6f718344168b73bc0a4245210d9/Untitled.png)

Wenn wir nun aber zum Beispiel in dem `<p>` Element, alle `<b>` Elemente ansprechen wollten.

Dann könnte das wie folgt geschrieben werden.

**Code-Beispiel:**

```css
p b {
    color: #ff9100;
}
```

Die CSS-Regel, spricht zuerst das `<p>` Element an und dann alle innerhalb des `<p>` Elements befindlichen `<b>` Elemente. Auch diese die sich wiederum selbst innerhalb eines weiteren Kind-Elements innerhalb des <p> Elements befinden.

**Ausgabe im Browser:**

![Untitled](1%202%205%20Nachfahrenselektoren%205dbfb6f718344168b73bc0a4245210d9/Untitled%201.png)

Ein weiteres Beispiel, währe das alle `<span>` Elemente innerhalb des `<body>` Elements ausgewählt werden.

**Code-Beispiel:**

```css
p b {
    color: #ff9100;
}

body span {
    color: #5eff00;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%205%20Nachfahrenselektoren%205dbfb6f718344168b73bc0a4245210d9/Untitled%202.png)

Wie zu sehen ist, werden alle `<span>` Elemente grün dargestellt. Weiter ist zu beachten, das trotz der CSS-Regel für das `<span>` Element, das `<b>` Element hiervon nicht angesprochen wird. Da es durch eine andere CSS-Regel definiert wurde. Und somit **nicht** Überschrieben wird.