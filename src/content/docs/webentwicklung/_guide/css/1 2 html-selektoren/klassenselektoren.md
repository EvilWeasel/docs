---
title: Klassenselektoren
description: tbd
---


Was sind Klassenselektoren und für was kann ich diese verwenden?

Klassenselektoren sind eine Erweiterung zu Typselektoren. Mit diesen Klassenselektoren können wir noch spezieller unser HTML-Dokument gestalten. Man könnte somit z.B. aus verschiedenen `<p>` Tags, eines mit einem Klassenselektor belegen und somit dieses gezielt ansteuern.

Wie ist nun ein solcher Klassenselektor aufgebaut und wo benutze ich diesen….

```html
<p class="info">Lorem Impsum Dolor Sit Amet</p>
```

Im obigen Beispiel sehen wir den Klassenselektor, als Attribut innerhalb des `<p>` Tags mit dem Wert “info” . Dieser kann nun über CSS angesprochen und somit gezielt gestaltet werden.

Die CSS Anweisung zu diesem Klassenselektor kann folgendermaßen Aussehen.

```css
.info {
	color: red;
}
```

Wir geben für einen Klassenselektor immer zuerst einen Punkt an, gefolgt von dem Namen des Klassenselektors. Wie im unteren Bild zu sehen, ist der Klassenselektor ein Attribut des Elementes in dem er Verwendung findet. 

![Untitled](1%202%202%20Klassenselektoren%2012709dffe3d543b992f1ef6118c8195f/Untitled.png)

Zu einem Element, können auch mehrere Klassenselektoren geschrieben werden. So könnte man z.B. ein <p> Tag mit verschiedenen Selektoren belegen um diesen zu Gestalten.

**HTML-Beispiel:**

```css
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Klassenselektoren</title>
    </head>
    <body>
        <h1>Klassenselektoren</h1>
        <p class="info bgGray roundedCorner">
            Lorem ipsum dolor, sit amet...
        </p>
    </body>
</html>
```

**CSS-Beispiel:**

```css
.info {
    color:red;
}

.bgGray {
    background-color: #333;
}

.roundedCorner {
    border-radius: 1rem;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%202%20Klassenselektoren%2012709dffe3d543b992f1ef6118c8195f/Untitled%201.png)

Wie wir sehen hat unser `<p>` Element nun rote Schrift mit einem abgerundeten grauen Hintergrund. Überall dort wo nun eines dieser CSS-Regeln eingebunden wird. Werden diese auf das Element angewendet. Wobei hier die Hierarchie, wie zuvor auch beachtet werden muss. Aber dazu später mehr.