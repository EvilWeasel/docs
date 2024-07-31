---
title: Semantische Blöcke
description: Warum semantik in der HTML-Struktur wichtig ist.
---

Vor HTML 5 wurden Webseiten und Apps mit nicht Semantischen Blöcken geschrieben.

Beispiele für nicht Semantische Blöcke sind `<div>` und `<span>`. Diese haben aber keinen Bezug auf den Inhalt der Seite. Und man somit nur schwer sehen konnte für was dieses oder jenes div zuständig war.

Beispiele für Semantische Blöcke sind unter anderem: `<form>`, `<table>`, `<article>` oder `<h1>` welche einen klaren Hinweis gaben was der Inhalt darstellt.

Viele Webseiten wurden mit HTML Code geschrieben der folgendermaßen Aussah:

`<div id=”nav”>` , `<div class=”header”>` oder `<div id=”footer”>` um den Inhalt widerzuspiegeln.

Diese Schreibweise ist im Grunde nicht falsch, da diese auch heute noch Verwendung für JavaScript und CSS bzw. PHP hat um diese Elemente anzusteuern.

Um eine Webseite HTML5 Konform zu erstellen verwendet man daher sogenannte Semantische Blöcke, die einen direkten Bezug auf dessen Inhalt haben.

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

INFO: Einige Semantische Blöcke sollten Live gezeigt werden. Zum besseren Verstehen…

**Code-Beispiel:**

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
            #blueBorder {
                border: 1px solid blue;
            }
            #purpleBorder {
                border: 1px solid purple;
            }
            * {
                margin: 2px;
                padding: 2px;
            }
            figure {
                background: #011016;
                color: #ccc;
                width: 210px;
                border: 1px solid green;
            }
        </style>
    </head>
    <body id="blackBorder">
        <header id="redBorder"><h1>Header</h1></header>
        <main id="blueBorder">
            <h2>Main Content</h2>
            <section id="purpleBorder">
                <h2>Section</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, expedita.
                </p>
            </section>
            <article id="purpleBorder">
                <h2>Article</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur, doloribus.
                </p>
            </article>
            <aside id="purpleBorder">
                <h2>Aside</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                </p>
                <figure>
                    <img src="https://picsum.photos/200" alt="Random Image" />
                    <figcaption>Random Image</figcaption>
                </figure>
            </aside>
        </main>
        <footer>
            <time>Today 13:00</time>
        </footer>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%204%20Semantische%20Blo%CC%88cke%20%5BHTML5%5D%2064137b334d7c4afc85dcc489e6cffcb7/Untitled.png)

Semantische Blöcke haben verschiedenen Nutzen.
Nicht nur das der Developer den Code besser Lesen kann. Sondern auch das Suchmaschinen wie Google den Inhalt der Webseite besser zuordnen können. Screen Reader können ebenfalls den Inhalt besser verstehen und zusammenhängenden Inhalt besser wiedergeben. Was nur ein paar Vorteile gegenüber nicht Semantischen Code bzw. Blöcke sind.
