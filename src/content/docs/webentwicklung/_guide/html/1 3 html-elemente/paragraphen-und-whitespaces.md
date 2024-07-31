---
title: Paragraphen und Whitespaces
description: tbd
---

```markdown
# Paragraph
Begin: <p>
Ende: </p>
```

**Paragraphen, (kurz: P-Tag)** beginnen immer in einer neuen Zeile und nehmen dabei die komplette Fensterbreite ein. Normalerweise wird um ein P-Tag vom Browser ein wenig platz eingefügt.

P-Tags können nicht von der Anzeige in HTML her geändert werden.
Zusätzlicher Leerzeichen-Raum bzw. Zeilen werden entfernt. 

WICHTIG: `<p>` Tags dürfen nicht ineinander verschachtelt werden. Da dieses bei der Interpretation Fehler verursacht.

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
        <p id="blackBorder">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum.
        </p>
        <p id="redBorder">
            Lorem ipsum 
						dolor sit amet        consectetur      adipisicing elit. Non, rerum.
        </p>
    </body>
</html>
```

**Anzeige im Browser:**

![Untitled](1%203%202%20Paragraph,%20Break,%20Pre%20&%20Trennlinie%20c2a2d28045784c338278e97bdc747320/Untitled.png)

```markdown
# Line Break
Begin und ende: <br />
```

**Line Breaks (kurz br-Tag),** definiert einen Zeilenumbruch in HTML, somit kann man eine neue Zeile beginnen ohne gleich einen neuen Paragraphen zu erstellen. Das ist z.B. hilfreich um einen längeren Text, in Abschnitte zu unterteilen und somit optisch besser Lesbar zu machen.

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
        <p id="blackBorder">
            Lorem ipsum <br />dolor sit amet consectetur adipisicing elit.
            <br />Non, rerum.
        </p>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%202%20Paragraph,%20Break,%20Pre%20&%20Trennlinie%20c2a2d28045784c338278e97bdc747320/Untitled%201.png)

```markdown
# Predefined Paragraph
Begin: <pre>
Ende: </pre>
```

**Preformatted (kurz pre),** 

Anders als beim `<p>` , wird bei einem `<pre>` der Inhalt so wieder gegeben wie er in HTML erstellt wurde. Es bleiben alle Zeilenumbrüche sowie Leerraum erhalten. Der Text wird auch in einem festen Text-breiten Schriftart wiedergegeben (normalerweise ist das Courier).

WICHTIG: `<pre>` ist ein Block-Element.

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
        <pre id="blackBorder">
            HTML, Sprache des Web, so rein, 
            Formt Seiten, die einladend sein.
            Struktur und Inhalt in Harmonie, 
            Im Code verborgen, wie in einer Symphonie. 
            Ohne dich, HTML, wären wir verloren im digitalen Meer.
        </pre>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%202%20Paragraph,%20Break,%20Pre%20&%20Trennlinie%20c2a2d28045784c338278e97bdc747320/Untitled%202.png)

```markdown
# Trennlinie
Begin und ende: <hr>
```

**Trennlinie (kurz hr),** wird dazu verwendet um Inhalt optisch von einander zu trennen.

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
        <h2>HTML Poem</h2>
        <pre id="blackBorder">
            HTML, Sprache des Web, so rein, 
            Formt Seiten, die einladend sein.
            Struktur und Inhalt in Harmonie, 
            Im Code verborgen, wie in einer Symphonie. 
            Ohne dich, HTML, wären wir verloren im digitalen Meer.
        </pre>
        <hr />
        <h2>Haiku HTML</h2>
        <pre id="redBorder">
            HTML webt den Raum,
            Struktur im digitalen Traum,
            Formt das Netz, so stumm.
        </pre>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%202%20Paragraph,%20Break,%20Pre%20&%20Trennlinie%20c2a2d28045784c338278e97bdc747320/Untitled%203.png)
