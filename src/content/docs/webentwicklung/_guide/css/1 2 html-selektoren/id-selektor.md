---
title: ID-Selektor
description: tbd
---


ID-Selektoren funktionieren ähnlich wie die Klassenselektoren. Aber mit einem kleinen aber wichtigem Unterschied. Wären Klassenselektoren mit jedem Element innerhalb eines HTML-Dokumentes verwendet werden können. So kann ein ID-Selektor nur einmal in einem HTML-Dokument vorkommen.

Denn ein ID-Selektor hat die Eigenschaft das er einmalig und somit einzigartig ist. Der ID-Selektor kann wie auch der Klassenselektor auch, in CSS angesprochen werden und für das Gestalten des HTML-Dokumentes verwendet werden. Was aber in der Praxis nicht so gemacht wird. Hierfür sollte man eher die Klassenselektoren verwenden.

Da wie schon gesagt, ID-Selektoren einmalig und einzigartig sind. Man kann diese zwar in mehreren HTML-Dokumenten verwenden. Sollte dieses aber nicht unbedingt tun. Da dieses zu Fehlern führen kann.

Wie verwenden wir nun ID-Selektoren?

Diese werden ebenfalls so wie die Klassenselektoren verwendet, nur das anstelle eines Punkt am Anfang dort ein Raute (”Hashtag” # ) steht. Weiter kann man nur eine ID angeben und nicht wie bei Klassenselektoren mehrere innerhalb des `class=””` Attributes.

**Code-Beispiel:**

```html
<p id="info">
```

So wird der ID-Selektor in einem HTML-Dokument angewendet. Anstelle von `class` steht `id`.

```css
#info {
    color: red;
}
```

Die CSS-Regel beginnt, wie schon weiter oben Beschrieben, mit einem Hashtag # anstelle eines Punktes . 

Die ID-Selektoren werden später noch in JavaScript zusätzlich Verwendung finden.
