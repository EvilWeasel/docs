---
title: Grundlagen
description: HTML-Grundlagen
---

**Was bedeutet HTML?**

HTML ist eine Abkürzung und steht für “Hypertext Markup Language” 

Hypertext (Übertext): Text der Dokumente im Netz durch Links miteinander verknüpft.

Markup Language (Auszeichnungssprache): Maschinenlesbare Sprache für die Gliederung und Formatierung von Texten.

Jedes HTML-Dokument ist eine eigene Webseite, jedoch sollte hier genau Unterschieden werden zwischen Webseite und Website. Eine Webseite ist eine einzelne Seite innerhalb einer Website. Wobei eine Website den gesamten Internetauftritt darstellt.

![Untitled](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/Untitled.svg)

HTML-Dokumente sind im Grunde “Textdokumente” die von jedem gängigen Browser verstanden wird. Und dem entsprechend auch im Browserfenster dargestellt werden kann.

HTML besteht aus verschiedenen Tags, die dem Browser sagen, wie der Inhalt der Webseite dargestellt werden soll. Ein einfacher HTML-Code besteht aus einem Anfangs-Tag, dem eigentlichen Inhalt und einem End-Tag.

**Abschließende Tags und Standalone-Tags**

Abschließende Tags werden verwendet, um den Abschluss des Tags zu markieren und zu definieren, wo der Inhalt des Tags endet. Standalone-Tags haben keinen Abschluss-Tag und werden stattdessen nur mit einem einzigen Tag definiert. Ein Beispiel für einen Standalone-Tag ist das `<img>`-Tag, das für die Einbindung von Bildern auf einer Webseite verwendet wird.

**Wie setzt sich solch ein Abschließendes und Standalone Tag-Element zusammen?**

![Untitled](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/Untitled.png)

Jedes Abschließende Tag-Element beginnt mit einem öffnenden Tag wie z.B. `<div>` und schließt mit `</div>`. Zwischen diesen beiden Tag’s befindet sich der Inhalt welcher dann im Browserfenster dargestellt wird. Das gesamte Konstrukt aus `<div>Inhalt</div>` nennt sich Element.

![Untitled](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/Untitled%201.png)

Jedes Standalone Tag-Element beginnt wie auch das abschließende mit einem öffnenden Tag wie z.B. `<img` . Allerdings wird ein Standalone Tag nicht wie ein abschließendes Tag geschlossen, sondern schließt mir `/>` . Wobei alles zwischen `<img` und `/>` als Inhalt angesehen wird und im Browserfenster ausgegeben wird.

Zudem besteht jedes Element noch aus vier Zwiebelschichten, die auf den Inhalt einwirken.
Im unteren Bild sieht man im blauen Bereich den Inhalt welcher hier mit einer höhe 150px und breite 300px ausgegeben wird. Um den Inhalt legt sich das padding im grünen Bereich . Das padding stellt den Abstand zwischen Inhalt und der border im gelben Bereich, dem rand der um den Inhalt liegt. Um den sogenannten Border liegt dann noch das sogenannte margin im braunen Bereich. Diese können mit CSS bearbeitet werden, um den Inhalt so darzustellen. Wie er gebraucht wird.

![Untitled](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/Untitled%202.png)

*Hier sind einige grundlegende HTML-Tags zusammen mit ihren Abschlusstags und Beschreibungen:*

<!-- Das ist ein Kommentar, er wird im Browser nicht angezeigt -->

*Beschreibung: Mit dem Kommentar-Tag können Sie Notizen in Ihrem Code hinterlassen, die nicht im Browser angezeigt werden.*

<!DOCTYPE html>

*Beschreibung: Dieses Tag definiert den Dokumenttyp und die HTML-Version.*

<html></html>

*Beschreibung: Dieses Tag ist das Wurzelelement eines HTML-Dokuments.*

<head></head>

*Beschreibung: Dieses Tag enthält Meta-Informationen über das Dokument, einschließlich des Titels, der im Browsertab angezeigt wird.*

<title></title>

*Beschreibung: Das Tag wird verwendet, um den Titel des Dokuments festzulegen, der in der Titelleiste des Browsers angezeigt wird.*

<body></body>

*Beschreibung: Dieses Tag definiert den Körper des Dokuments und enthält alle Inhalte wie Text, Bilder, Links, Listen, Tabellen usw.*

<h1></h1> bis <h6></h6>

*Beschreibung: Diese Tags werden verwendet, um Überschriften zu definieren, wobei <h1> die wichtigste und <h6> die am wenigsten wichtige Überschrift ist.*

<p></p>

*Beschreibung: Dieses Tag wird verwendet, um einen Absatz zu definieren.*

<a href=""></a>

*Beschreibung: Dieses Tag wird verwendet, um einen Hyperlink zu definieren.*

<img src="" alt="">

*Beschreibung: Dieses Tag wird verwendet, um ein Bild einzufügen. Es hat keinen Abschlusstag.*

<ul></ul> und <li></li>

*Beschreibung: Mit diesen Tags können Sie ungeordnete Listen erstellen.*

<ol></ol> und <li></li>

*Beschreibung: Mit diesen Tags können Sie geordnete Listen erstellen.*

<table></table>, <tr></tr>, <th></th> und <td></td>

*Beschreibung: Diese Tags werden verwendet, um eine Tabelle zu erstellen.*

*<td> steht für “Table Data”*

*<tr> steht für “Table Row”*

*<th> steht für “Table Head”*

<div></div>

*Beschreibung: Dieses Tag wird verwendet, um einen Bereich oder eine Sektion in HTML zu definieren.*

<span></span>

*Beschreibung: Dieses Tag wird verwendet, um einen Inline-Bereich zu definieren.*

**Schachtelung von HTML-Elementen:**

Elemente können geschachtelt werden, hierbei ist dir richtige Schachtelung der einzelnen Elemente wichtig. Tags müssen immer in umgekehrter Reihenfolge geschlossen werden. Bedeutet, das Tag was als letztes geöffnet wurde muss auch als erstes wieder geschlossen werden.

```html
# Richtig
<b><u>Inhalt</u></b>

# Falsch
<b><u>Inhalt</b></u>
```

Denn falsch verschachtelte Elemente sind nicht HTML Valide und können zu Fehlern bei der Interpretation führen.

[1.1.1 Grundgerüst](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/1%201%201%20Grundgeru%CC%88st%2083212faca25146c38bb3dbaf6efaee97.md)

[1.1.2 Namens-, Formatierung- & Struktur-Konvention](1%201%20HTML%20-%20Grundlagen%20688156bb56bf4e978a49b6c361b44a74/1%201%202%20Namens-,%20Formatierung-%20&%20Struktur-Konvention%20990a04a5dcb64bcaa57ad0b8659044fa.md)