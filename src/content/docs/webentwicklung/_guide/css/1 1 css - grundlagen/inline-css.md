---
title: Inline-CSS
description: tbd
---

Das Inline Attribut, wird wie der Name schon vermuten lässt, innerhalb des Tag-Elements geschrieben. Genauer gesagt werden die Attribute immer im Anfangs-Tag geschrieben werden, ohne Ausnahme. Es macht keinen Sinn diese im End-Tag zu schreiben.

Der Aufbau eines solchen Inline-CSS-Elements ist dem von HTML sehr ähnlich, außer das es keine schließenden Tags gibt. Stattdessen werden die Attribute und Werte innerhalb des <style> Elements in den Gänsefüßchen mit Semikolons getrennt eingetragen. 

Hier ein Beispiel wie solch ein `<p>` Tag mit `style` Anweisung aussehen kann.

![Untitled](1%201%201%20Inline%20CSS%204b4a4f7dcd724e80b8406442f1b703a4/Untitled.png)

Wie man im obigen Bespiel sehen kann, wird in den Anfangs-Tag das CSS-Style-Element eingebunden. Und wirkt sich auf den Inhalt des `<p>` Tag aus. Da es sich um ein Inline-CSS handelt, wirkt es sich auch nur dort aus wo es direkt geschrieben wurde. Alle anderen Tags sind hiervon unberührt.

**Code-Beispiel:**

```html
<body>
		<p style="color: red">Hello World</p>
</body>
```