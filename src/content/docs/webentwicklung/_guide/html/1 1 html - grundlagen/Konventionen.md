---
title: Konventionen
description: tbd
---

Es gibt in der Welt der Programmierung und so auch bei Web-Development bzw. Web-Design, sogenannte Konventionen. Nach denen man Inhalt oder Namen, Strukturiert bzw. Formatiert.

Fangen wir bei der Naming-Convention an…
Hier gibt es verschiedene Ausdrucksweisen wie man etwas Schreiben kann.

Es gibt drei verschiedene Naming-Conventions:

- **`CamelCase`:** Bei dieser Schreibweise werden immer die ersten Buchstaben der folge Wörter groß geschrieben. Das erste Wort wird allerdings klein geschrieben.
    
    Zum Beispiel: `ichBinEinCamelCase`
    
- **`Snake_case`:** Hier werden alle Wörter kleingeschrieben und durch Unterstriche getrennt.
    
    Zum Beispiel: `ich_bin_ein_snake_case`
    
- **`kebab-case:`** Hier werden alle Wörter kleingeschrieben und durch Bindestriche getrennt.
    
    Zum Beispiel: `ich-bin-ein-kebab-case`
    
- `PascalCase`: Hierbei werden alle Anfangsbuchstaben der Wörter groß geschrieben.
    
    Zum Beispiel: `IchBinEinPascalCase`
    

Man sollte sich für eine Naming-Convention entscheiden und dann bei dieser bleiben.

Ich persönlich nutze gerne die `CamelCase` Variante. Weil diese schnell und einfach zu schreiben ist.

**Formatierungs-Konvention:**

Das nächste auf was geachtet werden soll und was auch zum guten Stil gehört. Ist die Formatierung-Konvention oder kurz auch nur formatting genannt.

Diese besagt wie ein Programm-Code oder auch HTML etc. auszusehen hätte.

Wobei es hier auch Spielraum gibt für eigene Interpretationen. Wobei diese dann wiederum nicht von gängigen Formatierungshilfen unterstützt werden.

**Code-Beispiel:**

```html
<!-- Richtige Formatierung -->
<!DOCTYPE html>
<html>
		<head>
				<meta charset="utf-8">
				<title>Dokument</title>
		</head>
		<body>
		</body>
</html>
```

Im obigen Beispiel sehen wir eine Formatierung welche der “NORM” entspricht und auch zum guten Stil gehört. Anhand der Einrückung der einzelnen Tags kann eine schnelle Zuordnung der Elemente und deren Inhalte erfolgen. Des Weiteren erleichtert es auch die Lesbarkeit.

**Code-Beispiel 1:**

```html
<!-- Falsche Formatierung -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Dokument</title>
</head>
<body>
</body>
</html>
```

Man kann nur schwer erkennen, wie die Struktur der Seite aufgebaut ist. Für den Entwickler ist nur schwer Nachzuvollziehen was genau zu welchem Element gehört noch wo welches eingebettet ist.

INFO: Dem Browser ist diese Schreibweise egal, er kann diesen Inhalt dennoch richtig ausgeben.

**Code-Beispiel 2:**

```html
<!-- Falsche Formatierung -->
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Dokument</title></head>
<body></body></html>
```

Im zweiten Beispiel, ist noch schwerer zu erkennen was wo wie mit was zusammenhängt.

Wie auch im ersten Beispiel, dem Browser ist diese Schreibweise egal. Die Ausgabe erfolgt dennoch richtig. 

ACHTUNG: Obige Schreibweise wird dennoch Verwendet um Speicher einzusparen. Das sind dann sogenannte Slimline-Codes in denen  jegliche Zeilenumbrüche, Leerzeichen usw. entfernt wurden.

**Code-Beispiel 2:**

```html
<!-- Falsche Formatierung -->
<!DOCTYPE html>
<html>
		<head>
														<meta charset="utf-8">
				<title>Dokument</title>
		</head>

		<body>

							</body>
</html>
```

Man kann so schreiben, da der Browser auch dieses Ausgeben kann, denn dem Browser sind die Leerzeichen und Zeilenumbrüche egal. Diese werden einfach bei der Interpretierung Ignoriert.

**Struktur-Konvention:**

Es gibt in HTML eine Struktur-Konvention, welche Suchmaschinen und z.B. Blinden-Lesegeräten helfen, Inhalt besser zu Verstehen und diese dann dementsprechend zu Interpretieren. 

Hierbei ist zwischen vier Elementen-Tags zu unterscheiden. 

Einmal zwischen `<b> … </b>` und `<strong> … </strong>` bzw. `<i> … </i>` und `<em> … </em>`

Schauen wir uns doch erstmal das `<b>`-Tag und `<strong>`-Tag an.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <b>Fettgedruckter Textinhalt</b><br />
        <strong>Fettgedruckter Textinhalt mit strong</strong>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%201%202%20Namens-,%20Formatierung-%20&%20Struktur-Konvention%20990a04a5dcb64bcaa57ad0b8659044fa/Untitled.png)

Optisch sehen beide Textinhalte gleich aus. Wobei der zweite Textinhalt mit dem `<strong>`-Tag Element umschlossen wird. Aber was bringt das nun?

Das strong Element hilft dabei einen Inhalt hervorzuheben, dieser wird dann von Suchmaschinen besonders wahrgenommen. Screen Reader betonen dann diesen Inhalt genauer. Um darauf mehr Aufmerksamkeit zu erzeugen.

Die zweite Variante ist das `<i> … </i>` und `<em> … </em>` , in beiden Fällen wird der Text Kursiv ausgegeben. Aber nur der Inhalt mit dem `<em>`-Tag-Element darum wird besonders beachtet und behandelt.

`Code-Beispiel:`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <i>Kursivgedruckter Textinhalt</i><br />
        <em>Kursivgedruckter Textinhalt mit em</em>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%201%202%20Namens-,%20Formatierung-%20&%20Struktur-Konvention%20990a04a5dcb64bcaa57ad0b8659044fa/Untitled%201.png)

Das sind aber nur eine kleine Auswahl an Textstrukturierung bzw. Textauszeichnungen.

Es gibt noch eine menge anderer Möglichkeiten, die im Internet auf [SelfHTML.org](http://SelfHTML.org) aufgelistet sind.