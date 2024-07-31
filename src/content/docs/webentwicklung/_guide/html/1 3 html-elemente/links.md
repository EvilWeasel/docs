---
title: Link-Elemente
description: Alles über Anker-Elemente
---



```markdown
# Links
Beginn: <a>
Source: href=""
Alternative: alt=""
Ende: </a>
```

Links (kurz a-tag steht für Anker) definieren einen Hyperlink und werden dazu verwendet um Inhalte oder externe Webseiten zu verlinken. Das wichtigste Attribut des `<a>` ist `href`, welchen das Ziel des Links darstellt. Es sollte wenn Möglich, immer der `alt=””` benutzt werden. Um eine alternative Textausgabe, welche nicht angezeigt wird, auszugeben. Diese werden zum Beispiel von Screen Readern oder Blinden-Lesegeräten erkannt und ausgegeben.

Ein Link wird Grundlegend folgendermaßen Ausgegeben.

- Noch nicht Besuchter Link: Unterstrichen und Blau dargestellt.
- Ein Besuchter Link: Unterstichen und Violet dargestellt.
- Ein Aktiver Link: Unterstrichen und Rot dargestellt.

Ein Link kann auch dazu verwendet werden, um Innerhalb einer Webseite auf einen bestimmten Anker zu springen.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <a href="http://frank-mcdonald.de" alt="Frank McDonald Blog">Frank McDonald</a>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%206%20Links,%20Bilder%20und%20Axen%20%5BWIP%5D%20332860323a7a4ddca787151850b5a9ac/Untitled.png)

```markdown
# Bilder
Beginn: <img
Source: src=""
Alternativ: alt=""
Ende: />
```

Das Image (kurz img) ist dem Hyperlink in vieler Hinsicht ähnlich. Nur das er speziell für Bilder ausgelegt ist. Um ein Bild in die Webseite einzubetten braucht man das `<img>` mit den Angaben zur Source `src=””` und wenn Möglich einen alternativen Text welcher wie auch beim Hyperlink mit `alt=””` eingebunden wird. Ein `<img>` hat keinen abschließenden Tag, sondern endet mit `/>`.

INFO: Man sollte immer versuchen die Größe des Bildes zu definieren. Andernfalls nimmt es die volle Größe und Breite des Bildes ein.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <img src="ape_with_hoodie.png" alt="Image" />
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%206%20Links,%20Bilder%20und%20Axen%20%5BWIP%5D%20332860323a7a4ddca787151850b5a9ac/Untitled%201.png)

Um ein Bild als Link zu verwenden, muss man lediglich das `<img/>` in ein Hyperlink einbetten.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <a href="HTML-SEITEN-LINK" alt="Link">
						<img src="ape_with_hoodie.png" alt="Image" style="width: 300px;" />
				</a>
    </body>
</html>
```
