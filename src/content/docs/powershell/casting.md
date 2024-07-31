---
title: Umwandeln von Datentypen
description: Wie man Datentypen in Powershell umwandelt.
sidebar:
  order: 5
---

In PowerShell ist es oft notwendig, Datentypen zu konvertieren, um bestimmte Funktionen auszuführen oder Daten in einem anderen Format zu erhalten.

## Datentypen-Umwandlung

Eine Möglichkeit, Datentypen in PowerShell umzuwandeln, besteht darin, den gewünschten Datentyp in eckigen Klammern anzugeben. Dies ist besonders nützlich, um einen String in eine Zahl umzuwandeln. Ein Beispiel:

```powershell
$zahl = "123"
[int]$zahl = $zahl
$zahl = $zahl + 2
$zahl
```

In diesem Beispiel wird die Variable `$zahl` zuerst als String definiert und dann durch das `[int]`-Cast in eine Integer-Zahl umgewandelt.

Kleiner Exkurs, was passiert, wenn wir hier die Konvertierung einfach weglassen?

```powershell
$zahl = "123"
$zahl = 2 + $zahl
$zahl
```

Eine weitere Möglichkeit, Datentypen in PowerShell umzuwandeln, ist die Verwendung der Methode `cast()`. Die Syntax ist wie folgt:

```powershell
[Datentyp]::cast($variable)
```

Hierbei wird die Variable `$variable` in den angegebenen Datentyp konvertiert. Ein Beispiel:

```powershell
$zahl = "123"
[int]::cast($zahl)
```

In diesem Beispiel wird die Variable `$zahl` als String definiert und dann durch `cast()` in eine Integer-Zahl umgewandelt.

## Parse-Methode

Die Parse-Methode ist eine weitere Möglichkeit, Daten in PowerShell umzuwandeln. Diese Methode ist besonders nützlich, um Strings in Zahlen umzuwandeln. Ein Beispiel:

```powershell
$zahl = "123"
[int]::Parse($zahl)
```

In diesem Beispiel wird die Variable `$zahl` als String definiert und dann durch `Parse()` in eine Integer-Zahl umgewandelt.

## Fazit

In PowerShell gibt es mehrere Möglichkeiten, Datentypen umzuwandeln. Die Verwendung von `[Typ]`, `cast()` und `Parse()` sind nur einige davon.
