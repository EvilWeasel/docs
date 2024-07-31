---
title: Strings
description: tbd
---

Text oder Strings sind in JavaScript eine Sequenz von Unicode-Zeichen. Unicode ist ein internationaler Standard, der fast alle Schriftzeichen der Welt enthält. Ein String setzt sich aus einzelnen Zeichen, den sogenannten Chars zusammen. Welche dann in einem String Konkateniert werden.

```jsx
# String Konkatenation
let string = 'Hallo' + ' ' + 'Welt' + '!';

# Chars in Strings Konkatenieren
let string = 'H' + 'a' + 'l' + 'l' + 'o' = 'Hallo';
```

## Stringliterale

In einem Programm können Stringliterale in einfache oder doppelte Anführungszeichen eingeschlossen werden (' oder "). Stringliterale in einfachen Anführungszeichen können in Doppelte Anführungszeichen eingeschlossen werden und umgekehrt.

```jsx
# Stringliteral in einfachen Anführungszeichen
let string = 'Hallo Welt!';

# Stringliteral in doppelten Anführungszeichen
let string = "Hallo Welt!";

# Stringliteral in einfachen Anführungszeichen mit doppelten Anführungszeichen
let string = 'Hallo "Welt"!';

# Stringliteral in doppelten Anführungszeichen mit einfachen Anführungszeichen
let string = "Hallo 'Welt'!";
```

Das Backslash-Zeichen ( \ ) hat in Javascript und anderen Programmiersprachen einen besonderen Zweck. Es wird als Escape-Zeichen bezeichnet. Das bedeutet, dass das Zeichen, welches nach dem Backslash-Zeichen folgt, eine besondere Bedeutung hat. Es gibt verschiedene Escape-Sequenzen. Die wichtigsten sind:

```jsx
# Escape-Sequenzen
\' = Ein einfaches Anführungszeichen
\" = Ein doppeltes Anführungszeichen
\\ = Ein Backslash-Zeichen
\n = Ein Zeilenumbruch
\r = Ein Wagenrücklauf
\t = Ein Tabulator
\b = Ein Backspace
\f = Ein Seitenumbruch
\v = Ein vertikaler Tabulator
\0 = Das Nullzeichen (NUL)
\XXX = Das Zeichen mit dem achten Bitwert XXX
\xXX = Das Zeichen mit dem Hexadezimalwert XX
\uXXXX = Das Unicode-Zeichen mit dem Hexadezimalwert XXXX
\u{XXXXX} = Das Unicode-Zeichen mit dem Hexadezimalwert XXXXX
```

Steht das \ Zeichen vor einem anderen Zeichen als in denen in den Escape-Sequenzen. Dann wird das \ Zeichen ignoriert und das andere Zeichen wird als normales Zeichen behandelt.

Was aber nicht bedeutet das es in Zukunft nicht weitere Escape-Sequenzen geben wird.
