---
title: Listen
description: Alles über geordnete- und ungeordnete Listen.
---

Listen sind wie der Name schon sagt, dafür gedacht um mehrere Text-Inhalte zusammen zu fassen.

Es gibt drei Arten von Listen….

```markdown
# Unsortierte Liste
Beginn-Liste: <ul>
Beginn-Listen-Inhalt: <li>
Ende-Listen-Inhalt: </li>
Ende-Liste: </ul>
```

Die Unsortierte Liste führt einen kleinen schwarzen Punkt voraus, welches die Unterteilung der Liste aufzeigt. Dieser kann aber mithilfe von CSS verändert oder sogar ausgeblendet werden.

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
        </style>
    </head>
    <body>
        <h3>Unsortierte Liste</h3>
        <ul id="blackBorder">
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
        </ul>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%203%20Listen%2066c0cdfe29e94f258637753a1da770b4/Untitled.png)

```markdown
# Sortierte Liste
Beginn-Liste: <ol>
Beginn-Listen-Inhalt: <li>
Ende-Listen-Inhalt: </li>
Ende-Liste: </ol>
```

Die sortierte Liste, wird wie die unsortierte Liste aufgebaut. Nur mit dem Unterschied das die sortierte Liste mit einem `<ol>` beginnt und mit `</ol>` endet. Und nicht wie die unsortierte Liste mit `<ul>` bzw. `</ul>`. Im Gegensatz zur unsortierten Liste, werden die Inhalte mit Zahlen angeführt, anstelle eines schwarzen Punktes. Wie auch bei der unsortierten Liste, können die Zahlen verändert werden, oder auch ausgeblendet.

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
        </style>
    </head>
    <body>
        <h3>Sortierte Liste</h3>
        <ol id="blackBorder">
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
        </ol>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%203%20Listen%2066c0cdfe29e94f258637753a1da770b4/Untitled%201.png)

```markdown
# Beschreibungs-Liste
Beginn-Liste: <dl>
Beginn-Listen-Inhalt: <dt>
Begin-Context-Inhalt: <dd>
Ende-Context-Inhalt: </dd>
Ende-Listen-Inhalt: </dt>
Ende-Liste: </dl>
```

Die Beschreibungs-Liste wird ebenfalls von HTML unterstützt. Kommt aber seltener zum Einsatz.

Diese Art von Liste beginnt mit `<dl>` und endet mit `</dl>` , wobei der Inhalt in Art und Beschreibung aufgeteilt ist. Die Beschreibung wird eingerückt dargestellt.

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
        </style>
    </head>
    <body>
        <h3>Beschreibungs-Liste</h3>
        <dl id="blackBorder">
            <dt>Element 1</dt>
            <dd>- Beschreibung von Element 1</dd>
            <dt>Element 2</dt>
            <dd>- Beschreibung von Element 2</dd>
        </dd>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%203%20Listen%2066c0cdfe29e94f258637753a1da770b4/Untitled%202.png)

Die einzelnen Listen-Elemente können auf Inhaltlich miteinander verknüpft werden. So kann z.B. in einer Beschreibungs-Liste auf das `<li>` in einer `<dd>` verschachtelt werden. Um mehrere Unterpunkte aufzulisten. Oder man kann in einer Unsortierten Liste, Sortierte Listen verschachteln oder auch umgekehrt. Je nach Anwendungsbedarf.

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
        </style>
    </head>
    <body>
        <h3>Unsortierte-Liste mit Beschreibungs-Elementen</h3>
        <ul id="blackBorder">
            <li>
                <dt>Element 1</dt>
                <dd>- Beschreibung von Element 1</dd>
            </li>
            <li>
                <dt>Element 2</dt>
                <dd>- Beschreibung von Element 2</dd>
            </li>
        </ul>

        <h3>Sortierte-Liste mit Beschreibungs-Elementen</h3>
        <ol id="blackBorder">
            <li>
                <dt>Element 1</dt>
                <dd>- Beschreibung von Element 1</dd>
            </li>
            <li>
                <dt>Element 2</dt>
                <dd>- Beschreibung von Element 2</dd>
            </li>
        </ol>

        <h3>Verschachtelte-Listen</h3>
        <ol id="blackBorder">
            <li>
                Hauptelement 1
                <ul>
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                </ul>
            </li>
            <br />
            <li>
                Hauptelement 2
                <ul>
                    <li>
                        Element 1
                        <ol>
                            <li>Zeiger 1</li>
                        </ol>
                    </li>
                </ul>
            </li>
        </ol>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%203%20Listen%2066c0cdfe29e94f258637753a1da770b4/Untitled%203.png)