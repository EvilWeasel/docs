---
title: Kombinierte Selektoren
description: tbd
---


Kombinieren wir unsere Selektoren zusammen. Um somit komplexe CSS-Regeln erstellen zu können.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Kombination aus Selektoren</title>
    </head>
    <body>
        <h1>Kombinatoren</h1>
        <p>
            <span class="warnung">Lorem ipsum dolor</span>
            <b>sit amet consectetur adipisicing elit.</b>
            <u id="wichtig"
                >Fugit necessitatibus dicta exercitationem quasi aliquam itaque
                mollitia tempora fugiat veniam corporis.</u
            >
        </p>
        <i>
            laudantium a dolores ipsa repellat veritatis hic unde odit ipsam.
        </i>
        <b>quasi aliquam itaque mollitia tempora fugiat veniam corporis.</b>
        <span
            >Exercitationem <i>suscipit</i> asperiores
            <b>illo</b> debitis,</span
        >
    </body>
</html>
```

Ausgehend von diesem HTML-Dokument, sollen nun einige CSS-Regeln definiert werden. Diese Regeln, sollen unter Kombination der zuvor gelernten Selektoren aufgebaut werden.

**CSS-Beispiel:**

```css
b ~ span > i {
    color: #ff9100;
}
```

Mit dieser CSS-Regel, wollen wir auf das `<i>` Element zugreifen, welches ein Kind-Element des `<span>` Elementes ist, welches wiederum ein Geschwisterselektor `<b>` vorausgehend besitzt.

**Ausgabe im Browser:**

![Untitled](1%202%207%20Kombinatoren%204f3dcf650e264486acfed8057a0af3d5/Untitled.png)

**CSS-Beispiel:**

```css
p > span.warnung {
    color: #9dff00;
}
```

Mit dieser CSS-Regel, wollen wir auf alle Klassenselektoren zugreifen, welche sich in einem `<span>` Element befinden und ein Kind-Element von `<p>` darstellen.

**Ausgabe im Browser:**

![Untitled](1%202%207%20Kombinatoren%204f3dcf650e264486acfed8057a0af3d5/Untitled%201.png)

**CSS-Beispiel:**

```css
p span.warnung {
    color: #00d9ff;
}
```

Ähnliche CSS-Regel wie oben, nur das hier mit einem Nachfahrenselektor die Regel erstellt wurde.

INFO: Beide CSS-Regeln, überschreiben sich je nach Erstellung innerhalb der CSS-Datei. Bedeutet, wenn die CSS-Regel mit Kindselektor zuerst geschrieben wurde. Wird diese von der CSS-Regel mit Nachfahrenselektor überschrieben. Wenn diese danach definiert wurde. Und andersrum ebenfalls.

**Ausgabe im Browser:**

![Untitled](1%202%207%20Kombinatoren%204f3dcf650e264486acfed8057a0af3d5/Untitled%202.png)

**CSS-Beispiel:**

```css
.warnung ~ b {
    color: #ff9100;
}
```

Diese CSS-Regel ruft alle `<b>` Elemente auf welches einen `Geschwisterselekter` mit einem `Klassenattribut warnung` vorausgehend besitzen.

**Ausgabe im Browser:**

![Untitled](1%202%207%20Kombinatoren%204f3dcf650e264486acfed8057a0af3d5/Untitled%203.png)

**CSS-Beispiel:**

```css
html head ~ body > p > b ~ u#wichtig {
    color: #ff0000;
}
```

Diese Monster CSS-Regel, ruft ein `<u>` Element auf, welches einen ID-Selektor “wichtig” beinhaltet. Welcher wiederum ein vorausgehendes Geschwisterelement `<b>` besitzt, welches wiederum ein Kind-Element von `<p>` ist, welches ein Kind-Element von `<body>` ist, welches ein vorausgehendes Geschwisterelement `<head>` hat und ein Nachfahre von `<html>` ist.

**Ausgabe im Browser:**

![Untitled](1%202%207%20Kombinatoren%204f3dcf650e264486acfed8057a0af3d5/Untitled%204.png)

Wie wir sehen können wir somit, komplexe CSS-Regeln für unser HTML-Dokument definieren und anwenden. Das ist aber nur die Spitze des CSS-Eisbergs, welchen wir hier Besprochen haben. Es gibt noch viele andere Attribute die wir teilweise im laufe des Kurses noch kennen lernen werden.
