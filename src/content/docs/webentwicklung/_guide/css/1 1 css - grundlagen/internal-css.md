---
title: Internes CSS
description: tbd
---


Bei der Internal CSS Schreibweise, wird diese in `<style>` Tags eingebunden. Welche wiederum in den `<head>` des HTML-Dokumentes geschrieben werden. Deswegen wird es auch Internal CSS genannt, da es innerhalb des HTML-Dokumentes definiert und mit Werten versehen wird.

Diese Art der Schreibweise wird nur selten genutzt, da es die Wartbarkeit, sowie die weiter Verwendbarkeit des CSS-Styles erschwert.

Hier ein Bespiel, wie solche ein Internal CSS aufgebaut ist.

![Untitled](1%201%202%20Internal%20CSS%20d678f0ada02b47a588da4d868da6581f/Untitled.png)

Wie man im obigen Beispiel sehen kann, wird das CSS-Style-Attribut und dessen Wert. Innerhalb des `<style>` Tags geschrieben. Was sich wiederum von dem Inline CSS deutlich Unterscheidet.

Wehrend wir im Inline CSS das `<p>` Tag Element direkt ansteuern. Benutzten wir bei der Internal CSS Schreibweise den `p` ”Selector” um auf das `<p>` Tag zuzugreifen. Anders als bei der Inline CSS steuern wir hierbei alle `<p>` Tags innerhalb des HTML-Dokuments an, um deren Aussehen zu beeinflussen.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS</title>

    <style>
        p {
            color: red;
        }
    </style>
</head>
<body>
    <p>Lorem ipsum dolor sit amet.</p>
</body>
</html> 
```