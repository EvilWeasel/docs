---
title: Erstellen von Powershell-Scripts
description: Erstellen von Powershell-Scripts
sidebar:
  order: 15
---

PowerShell-Scripts sind nützlich, um komplexe Aufgaben und Automatisierung in einer Windows-Umgebung durchzuführen.

Erstelle zunächst eine Datei mit der Erweiterung **`.ps1`**. Diese können jeden Texteditor verwenden, wie z. B. Notepad oder Visual Studio Code. Schreibe deinen PowerShell-Code in die Datei und speichern diesen.

```powershell
$currentTime = Get-Date
Write-Host "Aktuelle Zeit: $currentTime"
```

## Ausführen eines PowerShell Scripts

Bevor du ein PowerShell-Script ausführen kannst, stelle sicher, dass die Ausführungsrichtlinie auf deinem System die Ausführung von Scripts zulässt. Mehr dazu findest du [hier](/powershell/execution-policies.md).

Während unserer Schulung wäre es Sinnvoll diese auf `RemoteSigned` zu setzen, um sicherzustellen dass unsere Scripte ausführbar sind.

```powershell
Set-ExecutionPolicy RemoteSigned
```

Nun können wir unser Script wie folgt aufrufen:

```powershell
.\MeinScript.ps1
```

## Beispiel: Automatisches Löschen von temporären Dateien

Angenommen, du möchtest ein PowerShell-Script erstellen, um automatisch temporäre Dateien in Ihrem Benutzerprofil zu löschen. Hier ist ein Beispiel für ein solches Script:

```powershell
$tempFolderPath = $env:TEMP
Write-Host "Temporäre Dateien werden gelöscht: $tempFolderPath"

Get-ChildItem -Path $tempFolderPath -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

Write-Host "Temporäre Dateien erfolgreich gelöscht."
```

Speicher das Script als **`CleanTempFiles.ps1`** und führe es in der PowerShell-Konsole aus, wie im vorherigen Abschnitt beschrieben.
