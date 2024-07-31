---
title: display flex
description: Dynamische Layouts mit Flexbox
---

Flexbox, auch bekannt als Flexible Box Module, ist ein Layout-Modell in CSS, das es einfacher macht, responsive Design-Layouts zu erstellen. Es bietet eine effizientere Möglichkeit, das Layout, die Ausrichtung und die Größe von Elementen innerhalb eines Containers zu steuern, sowohl in Zeilen als auch in Spalten.

Hier sind einige wichtige Konzepte im Zusammenhang mit Flexbox:

1. **Flex Container:** Der Elternteil, in dem Flex-Elemente platziert sind. Durch die Anwendung von `display: flex;` auf einen Container werden seine Kinder zu Flex-Elementen.
2. **Flex Elemente:** Die direkten Kinder eines Flex Containers. Sie können in jede Richtung und in einer Linie oder in mehreren Linien angeordnet werden, abhängig von den Eigenschaften des Flex Containers.
3. **Hauptachse und Querachse:** Die Hauptachse ist die Achse, entlang derer die Flex-Elemente angeordnet sind. Sie kann horizontal oder vertikal sein, abhängig von der `flex-direction` Eigenschaft. Die Querachse steht senkrecht zur Hauptachse.

Einige wichtige Flexbox-Eigenschaften sind:

- `flex-direction`: Bestimmt die Richtung der Flex-Elemente innerhalb des Containers. Die Werte können `row`, `row-reverse`, `column` oder `column-reverse` sein.
- `flex-wrap`: Bestimmt, ob die Flex-Elemente in einer einzigen Linie oder in mehreren Linien angeordnet werden sollen. Die Werte können `nowrap`, `wrap` oder `wrap-reverse` sein.
- `flex-flow`: Ist eine Kurzschreibweise für `flex-direction` und `flex-wrap`.
- `justify-content`: Bestimmt die Ausrichtung der Flex-Elemente entlang der Hauptachse. Es kann Werte wie `flex-start`, `flex-end`, `center`, `space-between`, `space-around` oder `space-evenly` haben.
- `align-items`: Bestimmt die Ausrichtung der Flex-Elemente entlang der Querachse. Es kann Werte wie `flex-start`, `flex-end`, `center`, `baseline` oder `stretch` haben.
- `align-content`: Ähnlich wie `align-items`, aber es wirkt sich auf mehrere Linien aus. Es hat die gleichen möglichen Werte wie `align-items`.

Flexbox bietet auch Eigenschaften, die auf einzelne Flex-Elemente angewendet werden können, wie `flex-grow`, `flex-shrink` und `flex-basis`, die bestimmen, wie ein Element wachsen oder schrumpfen soll, um den verfügbaren Platz im Container zu füllen.

Weitere Informationen mit Beispielen:

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)