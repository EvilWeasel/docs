---
title: Externes CSS
description: tbd
---


Wie der Name schon vermuten lässt, wird External CSS in einer separaten Datei geschrieben und gespeichert. Was die Wartbarkeit und wieder Verwendbarkeit um eines erleichtert. Im unteren Bild sehen wir einen Grundlegenden Aufbau von HTML, CSS sowie JavaScript.

![Untitled](1%201%203%20External%20CSS%20043021ce366e40c8b43dd64c20e2ceae/Untitled.png)

Die styles.css oder welchen Namen auch immer die CSS Datei hat. Wird per Relativem Pfad in den `<head>` des HTML-Dokuments eingebunden. Was wiederum die Möglichkeit bietet, es in Verschiedenen HTML-Dokumenten einzubinden. Sofern man dieses denn möchte.

Der Aufbau solch einer `styles.css` ist der des Internal CSS sehr ähnlich.

Nachfolgend ein gängiges Beispiel wie solche eine `styles.css` aufgebaut ist.

**Code-Beispiel HTML:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <script src="./script.js" defer></script>
        <title>Test</title>
    </head>
    <body>
        <div class="banner"></div>
    </body>
</html>
```

**Code-Beispiel CSS:**

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #011016;
}

.banner {
    background-color: #033364;
    height: 80vh;
    width: 4vw;
    min-width: 4rem;
    border: 4px solid #e09c0a;
    border-radius: 3rem;
    box-shadow: #754600 0px 0px 24px 0px;
    transition: all 0.2s ease-in-out;
    background-image: url("./derSchotte_celtic_cross_vintageviking_north_design_tshirt_desig_c2569c72-a9ea-4a38-8432-c00c26ee3297.png");
    background-position: center center;
    background-repeat: no-repeat;
}

.banner:hover {
    box-shadow: none;
    transform: scale(1.02);
    width: 200px;
}
```

Wie im obigen Code-Beispiel zu sehen ist, werden wie bei der Internat-CSS Schreibweise die einzelnen Elemente über ihren Nenner angesprochen. Wobei hier schon einige Unterschiede zu erkennen sind. Aber dazu später mehr…

Wie man im HTML-Beispiel sehen kann, wird die `styles.css` mit 

`<link rel="stylesheet" href="styles.css" />` innerhalb des `<head>` Tag des HTML-Dokumentes eingebunden. Es handelt sich hierbei um ein Selbstschließendes Tag oder Standalone Tag, wie es in den HTML-Grundlagen schon einmal beschrieben wurde.

Das Element wird mit dem `link` Attribut benannt und gibt somit an, das es sich um eine Verknüpfung zu einem Externen Inhalt handelt. Mit `rel` wird angegeben das es sich um eine Relation handelt. Ergo was für ein Externer Inhalt wird hier geladen. In unserem Beispiel ist es die styles.css, weswegen `stylesheet` innerhalb des `rel` Attributes angegeben wird. Anschließend folgt noch das `href` Attribut oder HyperReferenz / HyperLink , in welchem der Absolute oder Relative Pfad zur externen Datei eingetragen wird.

ACHTUNG: Absolute Pfade können nur auf dem System auf der sich die Datei befindet angesprochen werden. Sollte man Beabsichtigen, das HTML-Dokument online oder anderweitig zur Verfügung stellen. Sollte man sicherstellen das die Date vorhanden ist und mit einem Relativen Pfad angegeben wurde. Ansonsten wird diese nicht gefunden.
