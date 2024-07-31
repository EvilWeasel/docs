---
title: Arbeiten mit dem Dateisystem
description: Wie man sich mit Powershell im Dateisystem zurechtfindet und wie man es manipuliert.
sidebar:
  order: 7
---

Die Arbeit mit dem Dateisystem in PowerShell beginnt mit der Navigation durch die Ordnerstruktur. Die Cmdlets `Get-ChildItem` und `Set-Location` sind hierbei besonders nützlich.

Das Cmdlet `Get-ChildItem` gibt eine Liste aller Dateien und Ordner im aktuellen Verzeichnis zurück.

```powershell
Get-ChildItem C:\Windows
ls # Linux-Equivalent; Beliebtes Alias unter Powershell
```

Das Cmdlet `Set-Location` ändert das aktuelle Arbeitsverzeichnis der Shell.

```powershell
Set-Location C:\Windows\System32
cd # Linux-Equivalent; Beliebtes Alias unter Powershell
```

## Dateien und Ordner

PowerShell bietet verschiedene Cmdlets zum Kopieren, Verschieben und Umbenennen von Dateien und Ordnern. Hier folgen einige Beispiele.

### Kopieren

```powershell
Copy-Item $HOME\example.txt C:\Temp
```

### Verschieben

```powershell
Move-Item $HOME\example.txt $HOME\Test\example.txt
```

### Umbenennen

```powershell
Rename-Item .\example.txt .\new-example.txt
```

### Suchen

PowerShell bietet das Cmdlet `Get-ChildItem` auch zum Suchen von Dateien und Ordnern anhand von Suchmustern. Siehe [PowerShell - RegEx und Pattern-Matching](PowerShell%20-%20RegEx%20und%20Pattern-Matching%20a5a189ca7ebb4ec695514d2ee919223f.md) 

```powershell
Get-ChildItem $HOME -Recurse -Filter "example*"
```

### Erstellen

```powershell
New-Item -ItemType File -Path $HOME\example.txt
```

```powershell
New-Item -ItemType Directory -Path $HOME\\neuer_ordner
```

### Löschen

```powershell
Remove-Item $HOME\\example.txt
```

```powershell
Remove-Item $HOME\\\\neuer_ordner -Recurse
```

## Lesen und Schreiben von Dateien

Das Lesen und Schreiben von Dateien ist ein weiterer wichtiger Aspekt der Arbeit mit dem Dateisystem in PowerShell. PowerShell bietet hierfür die Cmdlets `Get-Content`, `Add-Content` und `Set-Content`.

### Lesen des Inhalts einer Datei

```powershell
Get-Content $HOME\example.txt
```

### Schreiben in eine Datei

```powershell
Set-Content $HOME\example.txt "This is the new content"
```

### Hinzufügen von neuem Inhalt zu einer Datei

```powershell
Add-Content $HOME\example.txt "This is the additional content"
```

## Datei- und Ordner-Berechtigungen

In PowerShell kann man die Berechtigungen von Dateien und Ordnern mithilfe des Cmdlets `Get-Acl` überprüfen und mit dem Cmdlet `Set-Acl` ändern.

### Überprüfen der Berechtigungen einer Datei

```powershell
Get-Acl $HOME\example.txt
```

### Ändern der Berechtigungen einer Datei

```powershell
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("User1","ReadAndExecute","Allow")
$acl = Get-Acl $HOME\example.txt
$acl.SetAccessRule($rule)
Set-Acl C:\\Temp\\example.txt $acl
```

## File System Providers

PowerShell bietet sogenannte "File System Providers", die es ermöglichen, auf andere Dateisysteme als das lokale Dateisystem zuzugreifen. Ein Beispiel hierfür ist das Cmdlet `New-PSDrive`, mit dem man eine Verbindung zu einem Netzwerklaufwerk herstellen kann.

Ein Beispiel für das Herstellen einer Verbindung zu einem Netzwerklaufwerk:

```powershell
New-PSDrive -Name "N" -PSProvider FileSystem -Root "\\\\Server\\Share"
```

Ein weiteres Beispiel für einen File System Provider ist der Registry Provider, mit dem man auf die Windows-Registrierung zugreifen kann. Ein Beispiel hierfür ist das Cmdlet `Set-ItemProperty`, mit dem man den Wert eines Registry-Eintrags ändern kann.

```powershell
Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" -Name "Hidden" -Value 1
```

Es gibt außerdem den Certificate Provider, mit dem man auf Zertifikate im Zertifikatspeicher zugreifen kann. Ein Beispiel hierfür ist das Cmdlet `Get-ChildItem`, mit dem man alle Zertifikate im Zertifikatspeicher anzeigen kann.

```powershell
Get-ChildItem Cert:\\\\CurrentUser\\\\My
```
