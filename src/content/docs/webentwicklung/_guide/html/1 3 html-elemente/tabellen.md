---
title: Tabellen
description: tbd
---


```markdown
# Tabellen
Beginn: <table>
Rows-Beginn: <tr>
Rows-Ende: </tr>
Head-Beginn: <th>
Head-Ende: </th>
Data-Beginn: <td>
Data-Ende: </td>
Ende: </table>
```

Tabellen sind gut geeignet, um Daten in Zellen und Reihen dargestellt im Browser-Fenster auszugeben. Dabei sind der Größe der Tabelle keine grenzen gesetzt.

Jede Zelle in der Tabelle beginnt mit `<td>` und endet mit `</td>`. Ausgeschrieben bedeutet 

`<td>` : Table Data

Alles was zwischen `<td>` und `</td>` ist der Inhalt welcher im Browser-Fenster ausgegeben wird.

`<tr>` : Table Row

Wie oben schon erwähnt kann man so viele Zeilen in einer Tabelle haben. Wie diese gebraucht werden, man sollte lediglich darauf achten, das in jeder Zeile die gleich Anzahl an Zellen vorhanden ist. Ansonsten wird die Tabelle nicht richtig dargestellt.

`<th>` : Table Header

Wenn man in der Tabelle Titel verwenden muss oder möchte. Dann wird dieses über `<th>` begonnen bzw. mit `</th>` beendet.

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
        <table id="blackBorder">
            <tr>
                <th>Frage:</th>
                <th>Inhalt</th>
            </tr>
            <tr>
                <td>Vorname:</td>
                <td>Frank</td>
            </tr>
            <tr>
                <td>Nachname:</td>
                <td>McDonald</td>
            </tr>
            <tr>
                <td>Umschulungsgrund:</td>
                <td>Zu lange aus dem alten Beruf.</td>
            </tr>
            <tr>
                <td>Ziel:</td>
                <td>
                    Als Couch / Trainer arbeiten nach Abschluss der Umschulung.
                </td>
            </tr>
        </table>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%204%20Tabellen%20cf08595674fc4418b385b815165344a1/Untitled.png)