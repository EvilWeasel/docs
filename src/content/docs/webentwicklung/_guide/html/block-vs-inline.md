---
title: Block vs Inline
description: Ein Vergleich von Inline und Block Elementen
---


Jedes HTML Element hat eine Standart-Anzeige, je nach Typ des Elements.

Diese beiden Anzeigetypen sind Block und Inline.

## Block-Element(e)

Block-Elemente werden meistens verwendet, um größere Abschnitte des HTML-Dokuments zu strukturieren, wie zum Beispiel Absätze oder Überschriften. Inline-Elemente hingegen werden verwendet, um innerhalb eines Blocks kleinere Bereiche zu kennzeichnen oder zu formatieren, wie zum Beispiel Links oder fettgedruckter Text.

Ein Block-Element beginnt immer in einer neuen Zeile und nimmt die volle Breite des Browser-Fensters ein.

**Code-Beispiel Block-Element:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
        <style>
            #blackBorder {
                border: 1px solid black;
            }
            #redBorder {
                border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <div id="blackBorder">
            Div, ist ein Block-Element
        </div>
        <p id="blackBorder">Paragraph, ist ein Block Element</p>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%202%20HTML%20Block-%20&%20Inline-Elemente%20130086a7afa348c4b37e65e72554d7b4/Untitled.png)

**Auszug weiterer Block-Elemente:**

- `<article>` für Artikel
- `<div>` für allgemeine Webseiten-Unterteilung
- `<h1>``<h6>` für Überschriften
- `<ul>` und `<ol>` für Listen
- `<table>` für Tabellen
- `<form>` für Formulare
- `<header>` für Kopfzeilen
- `<nav>` für Navigationsleisten
- `<section>` für Sektionen
- `<footer>` für Fußzeilen
- `<adress>` für Adressen

## Inline-Element(e)

Inline-Elemente fangen nicht wie Block-Elemente in einer neuen Zeile an.

Stattdessen nehmen sie nur soviel Platz ein wie benötigt wird.

**Code-Beispiel Inline-Element:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
        <style>
            #blackBorder {
                border: 1px solid black;
            }
            #redBorder {
                border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <span id="blackBorder"
            >span-element, nimmt nur soviel Platz ein wie nötig</span
        >
        <span id="redBorder"
            >span-element, nimmt nur soviel Platz ein wie nötig</span
        >
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%202%20HTML%20Block-%20&%20Inline-Elemente%20130086a7afa348c4b37e65e72554d7b4/Untitled%201.png)

**Auszug weiterer Inline-Elemente:**

- `<a>` für Links
- `<img>` für Bilder
- `<strong>` für fettgedruckten Text
- `<em>` für kursiv gedruckten Text
- `<input>` für Eingabefelder
- `<button>` für Schaltflächen
- `<label>` für Beschriftungen
- `<select>` für Auswahllisten
- `<textarea>` für Texteingabefelder
