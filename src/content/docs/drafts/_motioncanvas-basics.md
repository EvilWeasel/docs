---
title: Motion Canvas Basics
description: Die wichtigsten Konzepte von Motion Canvas erklärt
---

## Projekt

Jedes Video in Motion Canvas wird durch ein Projekt-Objekt repräsentiert. In der Starter-Template ist dieses in `src/project.ts` zu finden:

**`src/project.ts`**
```ts
import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';

export default makeProject({
  scenes: [example],
});
```

Ein Projekt ist ein **Array an `Szenen`**, welche nacheinander angezeigt werden sollen, gegebenenfalls auch mit Transitions.

## Szene

Zu einer Szene in Motion Canvas gehören alle Elemente die wir auf dem Bildschirm darstellen und animieren wollen. Eine einfache Szene sieht wie folgt aus:

**`src/scenes/example.tsx`**
```tsx
import {makeScene2D} from '@motion-canvas/2d';

export default makeScene2D(function* (view) {
  // animation
});
```

In der Szene wird eine Animation durch eine Generatorfunktion beschrieben. Die `view`-Variable wird verwendet, um Elemente zur Szene hinzuzufügen.

```tsx
import {makeScene2D} from '@motion-canvas/2d';
export default makeScene2D(function* (view) {
  view.add(
  <Circle
    ref={myCircle}
    x={-300}
    width={140}
    height={140}
    fill="#e13238"
  />,
);
});
```

## Elemente und Animation

Um Elemente animieren zu können, brauchen wir eine Referenz auf diese. Es gibt mehrere Methoden, um eine Referenz auf ein Element zu erstellen, hier die Einfachste.

```tsx
import {makeScene2D} from '@motion-canvas/2d';
export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  view.add(
    <Circle
      ref={myCircle}
      x={-300}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );
});
```

Mit der Referenz auf das Element, können wir dieses nun animieren. Hier ein einfaches Beispiel:

```tsx
...
yield*
  all(
    myCircle().fill('#e6a700', 1).to('#e13238', 1),
    myCircle().positon(300, 1).to(-300, 1),
  );
```

Jede Eigenschaft eines Nodes kann gelesen und aktualisiert werden. Diese Eigenschaften sind keine CSS-Properties, sondern an die `CanvasAPI` von JavaScript angelehnt.

### Eigenschaft auslesen

```ts
const fill = myCircle().fill(); // #e13238
```

### Eigenschaft setzen

```ts
myCircle().fill('#e6a700');
```

### Eigenschaft animieren

```ts
myCircle().fill('#e6a700', 1);
```

Der zweite Parameter sorgt für eine tween-Animation, welche zwischen dem vorherigen Wert und dem neuen Wert animiert.

Es reicht jedoch nicht diese Funktionen einfach aufzurufen. Damit alle Animationen in der Reihenfolge abspielen können, müssen wir diese mit dem `yield*` Keyword zurückgeben.

```ts
yield * myCircle().fill('#e6a700', 1);
yield * myCircle().fill('#e13238', 1);
```

Es gibt jedoch auch einen Shortcut um dieselbe Eigenschaft von-bis zu animieren:

```ts
yield * myCircle().fill('#e6a700', 1).to('#e13238', 1);
```

In unserem Beispiel wollen wir `fill` und `position` animieren.

```ts
yield * myCircle().fill('#e6a700', 1).to('#e13238', 1);
yield * myCircle().position.x(300, 1).to(-300, 1);
```

Das funktioniert, animiert wie beschrieben allerdings beide Effekte nacheinander. Um mehrere Animationen gleichzeitig durchzuführen, nutzen wir `all()`.

```ts
yield *
  all(
    myCircle().fill('#e6a700', 1).to('#e13238', 1),
    myCircle().position.x(300, 1).to(-300, 1),
  );
```

Neben `all()` gibt es auch Funktionen, welche sequenzielle oder wiederholende Animationen ermöglichen.

Das vollständige Beispiel:

**`src/szenes/example.tsx`**
```tsx
import {Circle, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();

  view.add(
    <Circle
      ref={myCircle}
      x={-300}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );

  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill('#e6a700', 1).to('#e13238', 1),
  );
});
```