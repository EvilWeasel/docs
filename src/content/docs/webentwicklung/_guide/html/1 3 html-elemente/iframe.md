---
title: IFrame
description: Externen Web-Content mit IFrames einbetten.
---


```markdown
# Inline Frame
Beginn: <iframe>
Ende: </iframe>
```

Ein Inline Frame (kurz iframe) ist ein wie der Name schon vermuten lässt ein Inline Element.

`<iframe>` wird dazu verwendet um Dokumente, Webseiten, Google Maps usw. in die eigene Seite einzubetten. Um die externen Daten einzubinden wird das `src=””` Element verwendet. 

INFO: Es sollte wenn Möglich immer ein Titel mit angegeben werden mit `title=””`

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <iframe
            src="http://frank-mcdonald.de/"
            title="Frank McDonald"
        ></iframe>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%205%20IFrame%20f319c02f8d5e418e82d7956ad8d26e00/Untitled.png)

Hierbei ist allerdings noch zu beachten, das im obigen Beispiel das IFrame in seiner Standartgröße angezeigt wird. 300px / 150px mit einem Border von 2px. Möchte man die Größe des `<iframes>` verändern so macht man dieses über `width` und `height`

**Code-Beispiel:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <iframe
            src="http://frank-mcdonald.de/"
            title="Frank McDonald"
            width="600px"
            height="600px"
        ></iframe>
    </body>
</html>
```

**Ausgabe im Browser:**

![Untitled](1%203%205%20IFrame%20f319c02f8d5e418e82d7956ad8d26e00/Untitled%201.png)