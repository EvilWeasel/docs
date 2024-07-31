---
title: Variablen
description: Wie man Variablen in Powershell verwendet.
sidebar:
  order: 3
---

In PowerShell werden Variablen verwendet, um Daten zu speichern. Diese Daten haben immer einen **Datentyp (wie String, Integer, Datum, …)**. Weitere Informationen zu Datentypen findest du [hier](/powershell/datentypen).

Zur Vereinfachung kann man sich Variablen auch als **Container für Werte** sehen. Ich habe einen Wert (z.B. `“Hello World”`), dem ich ein Label (z.B. `$Greeting`) gebe, damit ich den Wert an mehreren Stellen einsetzen kann, ohne diesen erneut tippen zu müssen.

Um der Variablen den Wert wie beschrieben zuzuweisen, nutzen wir `=` (Assignment/Zuweisungsoperator).

```powershell
$Greeting= "Hello World”
```

## Verwendung von Variablen

Sobald du eine Variable erstellt und ihr einen Wert zugewiesen hast, kannst du sie in deinem PowerShell-Skript verwenden. Du kannst auf die Variable verweisen, indem du ihren Namen mit einem Dollarzeichen voranstellst. Wenn du beispielsweise den Wert von `myVariable` anzeigen möchtest, würdest du Folgendes eingeben:

```powershell
Write-Output $Greeting
```

## Variablenskope

Hast du dich jemals über eine Variable gewundert, die scheinbar ohne ersichtlichen Grund null oder undefiniert ist, obwohl du sicher bist, dass du ihr einen Wert zugewiesen hast?

Dieses Rätsel kann oft auf das Konzept des Variablenskopes zurückgeführt werden.

In PowerShell bestimmt der Skope einer Variablen, wo sie in deinem Skript aufgerufen und verwendet werden können. Variablen können je nach Definitionsort unterschiedliche Skopes haben. Wir konzentrieren uns auf zwei Hauptfälle: Variablen, die außerhalb von Funktionen definiert wurden, und Variablen, die innerhalb von Funktionen definiert wurden.

## Äußere Variablen

Wenn du eine Variable außerhalb einer Funktion definierst, kann sie überall im gleichen Skript aufgerufen und verwendet werden. Erstellen wir eine Variable `outsideVariable` und weisen ihr einen Wert zu:

```powershell
$outsideVariable = "Ich bin außerhalb einer Funktion"
```

Wenn wir jetzt eine Funktion namens `ShowOutsideVariable` erstellen, können wir auf den Wert von `outsideVariable` innerhalb der Funktion zugreifen:

```powershell
function ShowOutsideVariable {
    Write-Output $outsideVariable
}
```

Wenn Sie die Funktion `ShowOutsideVariable` aufrufen, wird der Wert von `outsideVariable` angezeigt:

```powershell
ShowOutsideVariable
```

## Innere Variablen

Variablen, die innerhalb einer Funktion definiert wurden, können nur innerhalb dieser Funktion aufgerufen werden und sind außerhalb der Funktion nicht zugänglich. Dies wird als lokaler Skope bezeichnet. Erstellen wir eine Funktion namens `ShowInsideVariable` und definieren innerhalb der Funktion eine Variable namens `insideVariable`:

```powershell
function ShowInsideVariable {
    $insideVariable = "Ich bin innerhalb einer Funktion"
    Write-Output $insideVariable
}
ShowInsideVariable
Write-Output $insideVariable # Dies wird keinen Wert anzeigen
```

Wenn du die Funktion `ShowInsideVariable` aufrufst, wird der Wert von `insideVariable` angezeigt.

Wenn du jedoch versuchst, auf die `insideVariable` außerhalb der `ShowInsideVariable` Funktion zuzugreifen, erkennt PowerShell sie nicht, da sie nur innerhalb der Funktion zugänglich ist.
