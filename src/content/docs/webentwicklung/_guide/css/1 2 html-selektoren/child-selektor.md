---
title: Child-Selektor
description: tbd
---

Kindselektoren sind im Grunde, Typselektoren die wir in einer CSS-Regel an einander Reihen.

Was bedeutet das nun genau? 

Nehmen wir an, aus irgendeinem Grund sollen keine Klassen-, ID-Selektoren verwendet werden. Sondern nur Typselektoren. Wir schon bekannt ist, können wir mit Typselektoren, jedes beliebige Element innerhalb des HTML-Dokumentes ansprechen. Für das eine CSS-Regel definiert wurde.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Kindselektoren</title>
    </head>
    <body>
        <h1>Kindselektoren</h1>
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

```css
p, span {
    color: #9dee08;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%204%20Kindselektoren%2066206e40edae443d946c18f2d2747932/Untitled.png)

Wie man sehen kann, ist die Farbe des Textes “Grün”. Aber wie kann man nun ohne ID bzw. Klasse auf Typselektoren zugreifen. Die sich innerhalb des `<p>` Elements befinden.

Das macht man mit einer Verkettung von Typselektoren. Diese werden mit einem “größer als” (`>`) Zeichen, aneinander gereiht als CSS-Regel definiert. 

**Code-Beispiel:**

Nehmen wir unser obiges HTML-Beispiel-Dokument. Und erstellen dafür folgende CSS-Regeln.

```css
p > b {
    color: #ff9100;
}

p > span {
    color: #a2dd01;
}

p > span > b {
    color: #ff9100;
}

html > body > p > span > i {
    color: #a200ff;
    font-size: 2rem;
}

span {
    color: #01b1dd;
}
```

**Ausgabe im Browser:**

![Untitled](1%202%204%20Kindselektoren%2066206e40edae443d946c18f2d2747932/Untitled%201.png)

Wie wir sehen können, konnten wir mit Hilfe dieser Typselektoren-Verkettung, auf Typselektoren direkt zugreifen. Ohne das wir dabei andere Typselektoren mit angesprochen haben. Es gibt noch eine weitere Schreibweise, dir wir Anwenden könnten. Die Typselektoren durch Kommas getrennt ansprechen.

**Code-Beispiel:**

```css
p > b {
    color: #ff9100;
}

p > span {
    color: #a2dd01;
}

p > span > b, i {
    color: #ff9100;
}

span {
    color: #01b1dd;
}
```

In diesem Code-Beispiel sind die Typselektoren `<b>` sowie `<i>` mit Komma getrennt aufgeschrieben. Da diese Kindselektoren von `<span>` sind, welches wiederum ein Kindselektor von `<p>` ist. Somit ist diese Schreibweise auch Möglich. 

## **Hierbei sei aber zwei Sachen erwähnt…**

Sollte in dem HTML-Dokument zweimal die gleiche Typselektoren-Verschachtelung vorkommen. So werden die CSS-Regeln, auf beide Zweige angewendet. Die die Hierarchie die gleiche ist.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles2.css" />
        <title>Kindselektoren</title>
    </head>
    <body>
        <h1>Kindselektoren</h1>
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

        <h1>Kindselektoren</h1>
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

![Untitled](1%202%204%20Kindselektoren%2066206e40edae443d946c18f2d2747932/Untitled%202.png)

Zum zweiten, sind alle Typselektoren auch gleichzeitig Kindselektoren. Da alle HTML-Elemente abhängig sind vom `root`, welches wiederum das `<html>` Element als Kind Element inne hat.

Gefolgt von `<head>`, `<body>` etc….