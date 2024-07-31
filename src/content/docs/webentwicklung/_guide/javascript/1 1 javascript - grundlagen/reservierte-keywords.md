---
title: Reserved-Keywords
description: tbd
---

## Bezeichner und reservierte Wörter

Ein Bezeichner ist im Grunde einfach nur ein Name für eine Variable, Funktion, Klasse, etc. In JavaScript muss ein Bezeichner mit einem '\_' einem '\$' oder einem Buchstaben beginnen. Danach können noch Zahlen folgen. Es dürfen keine Leerzeichen oder Sonderzeichen verwendet werden. Außerdem dürfen keine reservierten Wörter verwendet werden. Reservierte Wörter sind Wörter, die bereits eine Bedeutung in JavaScript haben. Ein Beispiel für einen Bezeichner wäre 'meinBezeichner'. Ein Beispiel für einen reservierten Bezeichner wäre 'var', da 'var' bereits eine Bedeutung in JavaScript hat.

JavaScript reserviert folgende Wörter als so genannte Schlüsselwörter. Diese 'Schlüsselwörter' dürfen nicht als Bezeichner verwendet werden.

Schlüsselwörter:

```jsx
break | case | catch | class | const | continue | debugger | default | delete |
do | else | export | extends | finally | for | function | if | import | in |
instanceof | new | return | super | switch | this | throw | try | typeof | var |
void | while | with | yield
```

Es gibt auch einige Wörter die aktuell noch nicht als Schlüsselwörter verwendet werden, aber in zukünftigen Versionen von JavaScript als Schlüsselwörter verwendet werden könnten. Diese Wörter sollten deshalb auch nicht als Bezeichner verwendet werden.

**Zukünftige Schlüsselwörter:**

```jsx
class | enum | extends | super | const | export | import
```

Ebenfalls gibt es noch ein paar Wörter die im "normalen" JavaScript-Code zulässig sind, aber nicht in strict mode. Diese Wörter sollten deshalb auch nicht als Bezeichner verwendet werden.

**Strict mode:**

```jsx
implements | interface | let | package | private | protected | public | static;
```

Außerdem gibt es im Strict mode noch Bezeichner welche nicht vollständig reserviert sind, aber trotzdem nicht als Bezeichner verwendet werden dürfen.

```jsx
arguments | eval;
```

ECMAScript3 reserviert außerdem noch folgende Bezeichner:

```jsx
abstract | boolean | byte | char | class | const | double | enum | export |
extends | final | float | goto | implements | import | int | interface |
long | native | package | private | protected | public | short | static |
super | synchronized | throws | transient | volatile
```
