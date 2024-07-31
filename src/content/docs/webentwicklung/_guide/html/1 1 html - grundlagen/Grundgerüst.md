---
title: Grundgerüst
description: Aller Anfang ist HTML
---


Ein HTML-Dokument besteht immer aus ein und dem gleichen Grundgerüst. Ohne dieses könnten wir keinen Aufbau des HTML-Dokumentes machen können. Ohne dieses wüsste der Browser z.B. nicht welche Datei er ansprechen soll. Oder wie er einen “vermeintlichen” Link oder Bild darstellen soll. Noch wo dieser Link oder Bild zu finden wäre.

Nun, wie ist ein solches Grundgerüst den nun aufgebaut. Was muss der Browser denn nun Wissen.

Als erstes, muss jedes HTML-Dokument auf `.html` enden. Ohne diese Endung weis der Browser nicht um welche Art von Dokument es sich hier handelt. Nun könnte man dieses Dokument benennen, wie man möchte. Da spricht auch erstmal nichts dagegen, Aber auch hier sei gesagt, das dass erste HTML-Dokument einer Namenskonvention unterliegt und somit wird die erste Seite immer `index.html` benannt. Damit der Browser daran erkennt, das hier das erste HTML-Dokument, ergo die `erste Webseite` der `Website` beginnt. Alle weiteren HTML-Dokumente unterliegen aber dennoch einer Namenskonvention, welche auf die Schreibweise ausgelegt ist. 

Ein HTML-Dokument kann z.B. nicht Gerüst.html oder Gerüßt.html benannt werden, denn die umlaute und das scharfe `ß` sind vom Browser nicht interpretierbar. Daher sollte auf `Umlaute` und scharfe `ß` grundlegend verzichtet werden. Stattdessen sollte diese dann eher mit `ue, ae, oe` , bzw. das scharfe ß sollte stattdessen mit `Doppel s` geschrieben werden. also `geruest.html` bzw. `geruesst.html`

```markdown
# Richtig
geruest.html

# Falsch
gerüßt.html
```

Herzlichen Glückwunsch, Sie haben ihre erste Webseite bzw. Website erstellt. 😄

Nun geht es weiter, kommen wir nun zum sogenannten Grundgerüst jedes HTML-Dokumentes.

In Zeile 1 jedes HTML-Dokumentes befindet sich das `<!DOCKTYPE html>`

Dieses setzt sich aus kleines als `<`, Ausrufezeichen `!`, groß geschriebenen `DOCKTYPE`, Leerzeichen, `html` kleingeschrieben und einem größer als `>` Zeichen zusammen. Aber was bedeutet das nun…

Sobald das HTML-Dokument im Browser geöffnet wird, weis der dieser was er mit dem HTML-Dokument anfangen soll. Da er anhand des DOCKTYPE (dt. Dokumententyp) mit der Info `html`

nun weis, es handelt sich um eine HTML-Datei. 

Alle weiteren Zeilen sind nun HTML-Elemente, beginnend mit `<html> … </html>` . Hiermit legen wir unseren Ramen für das HTML-Dokument fest. Doch das ist noch nicht alles. Der Browser sollte auch noch Wissen welche Sprache wir denn nutzen wollen. Da wir den Kurs in Deutsch halten und auch die Inhalte dementsprechend in Deutsch sind. Werden dem Anführenden `HTML-Tag` noch folgende Informationen hinzugefügt, `<html lang=”de”>.` Damit geben wir dem Browser die Information, das der Inhalt Deutsch ist. 

ACHTUNG: Diese Language (dt. Sprache) hat nichts mit der später Auswählbaren Sprache auf der Website zu tun. Neuere Browser brauchen z.B. keine Angabe mehr für Language innerhalb des HTML-Tags. Da dieses in der Website umgestellt werden kann. 

Ich werde es hier einmal mit Aufzeigen, alle weiteren Code-Beispiele, werden dann ohne das lang - Attribut ausgegeben.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html lang="de">

</html>
```

Innerhalb der HTML-Tags in dem HTML-Dokument kommen nun noch weitere Tags hinzu, die für den Aufbau des Grundgerüstes essentiell sind. Den Anfang macht hier das Tag `<head> … </head>` welches noch weitere Informationen für den Browser bereitstellt. 

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
		<head>
		</head>
</html>
```

Nachdem wir nun das Head-Element definiert haben. Muss es nun noch mit Inhalt gefüllt werden.

Als erstes geben wir Informationen zum Schriftsatz an, welches wir über ein selbstschließendes Tag definieren. Dieses selbstschließende Tag heißt `<meta>` und hat kein weiteres schließendes Tag wie z.B. `<html>` oder `<body>`  

Das `charset` (dt. Schriftsatz) wird innerhalb des `<meta>` -Tags aufgeführt und somit weis der Browser welchen Schriftsatz er verwenden soll. Standard ist hier utf-8. UTF-8 ist eine weit verbreitete Kodierung, die eine breite Palette von Zeichen unterstützt und damit die Darstellung von Inhalten in vielen verschiedenen Sprachen ermöglicht. Dies ist besonders wichtig für Webseiten, die in mehreren Ländern oder in mehrsprachigen Kontexten genutzt werden.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
		<head>
				<meta charset="utf-8">
		</head>
</html>
```

Das nächste was innerhalb des `<head>` -Tag angegeben wird ist der Titel der Webseite, welche aktuell im Tab vom Browser ausgegeben wird. Meistens bezieht sich der Titel auf den ausgegebenen Inhalt der Webseite.

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
		<head>
				<meta charset="utf-8">
				<title>HTML-Grundgerüst</title>
		</head>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%201%201%20Grundgeru%CC%88st%2083212faca25146c38bb3dbaf6efaee97/Untitled.png)

Auf den Tag `<head> … </head>`, folgt dann das Tag `<body> … </body>,` welches dann den eigentlichen auszugebenden Inhalt beinhaltet. 

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
		<head>
			<!-- Beinhaltet Browserrelevante Informationen!! -->
		</head>
		<body>
			<!-- Beinhaltet die eigentliche auszugebende Webseite!! -->
		</body>
</html>
```