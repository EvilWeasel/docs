---
title: Execution-Policies in Powershell
description: Wie man Scripte in Powershell ausführen, oder die Ausführung dieser beschränken kann.
sidebar:
  order: 16
---

In Powershell gibt es sogenannte Execution-Policies, die das Ausführen von Skripten und Skriptblöcken regulieren. Diese Policies sind wichtig, um die Sicherheit des Systems zu gewährleisten.

## Wofür sind Execution-Policies da?

Es gibt verschiedene Arten von Execution-Policies:

- `Restricted`: Es können nur interaktive Befehle ausgeführt werden.
- `AllSigned`: Jedes Skript muss signiert werden, bevor es ausgeführt werden kann.
- `RemoteSigned`: Skripte, die von außerhalb des Systems stammen, müssen signiert sein.
- `Unrestricted`: Es können alle Skripte ohne Einschränkungen ausgeführt werden.

## Liste der Execution-Policies

Um die aktuelle Execution-Policy einzusehen, kann man den folgenden Befehl in der Powershell-Konsole ausführen:

```powershell
Get-ExecutionPolicy
```

## Ändern der Execution-Policies

Um die Execution-Policy zu ändern, kann man den folgenden Befehl in der Powershell-Konsole ausführen:

```powershell
Set-ExecutionPolicy <Policy>
```

Dabei wird Policy durch die gewünschte Policy ersetzt (`Restricted`, `AllSigned`, `RemoteSigned` oder `Unrestricted`). Wenn man die Policy nur vorübergehend ändern möchte, kann man den Parameter `-Scope` verwenden.

Zum Beispiel:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Unrestricted
```

Dieser Befehl ändert die Execution-Policy nur für den aktuellen Prozess und setzt sie auf `Unrestricted`.
