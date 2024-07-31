---
title: Arbeiten mit JSON- oder CSV-Dateien
description: Wie man mit Powershell JSON- oder CSV-Dateien strukturiert ausliest.
sidebar:
  order: 6
---

## JSON-Dateien

JSON-Dateien sind eine beliebte Möglichkeit, Daten zu speichern und zu übertragen. Sie sind einfach zu lesen und zu schreiben und werden in vielen APIs verwendet.

```powershell
$json = Get-Content -Raw -Path "C:\\path\\to\\file.json" | ConvertFrom-Json
$json | Format-Table
```

Die erste Zeile lädt den Inhalt der JSON-Datei in PowerShell und konvertiert ihn in ein PowerShell-Objekt. Die zweite Zeile formatiert das Objekt in einer Tabelle und gibt es aus.

Ähnlich können wir Powershell-Objekte in JSON konvertieren.

```powershell
Get-ChildItem | ConvertTo-Json | Out-File -Encoding utf8 -FilePath "C:\\\\path\\\\to\\\\output.json"
```

Zuerst geben wir eine Liste aller Dateien und Ordner im aktuellen Arbeitsverzeichnis aus und konvertieren diese in ein JSON-Objekt. Danach speicheren wir das JSON-Objekt in einer Datei. Hierbei wird die UTF-8-Kodierung verwendet, um sicherzustellen, dass Sonderzeichen korrekt dargestellt werden.

## XML-Dateien

XML-Dateien werden häufig in der Webentwicklung verwendet und sind eine weitere Möglichkeit, Daten zu speichern und zu übertragen.

```powershell
$xml = Get-Content -Path "C:\\path\\to\\file.xml" -Raw
[xml]$xmlObject = $xml
$xmlObject | Format-Table
```

Die erste Zeile lädt den Inhalt der XML-Datei in PowerShell. Die zweite Zeile konvertiert den Inhalt in ein PowerShell-Objekt und die dritte Zeile formatiert das Objekt in einer Tabelle und gibt es aus.

## CSV-Dateien

CSV-Dateien sind eine häufige Möglichkeit, Tabelleninformationen zu speichern und zu übertragen. Du können in Excel oder anderen Programmen geöffnet werden. Hier ist ein Beispiel dafür, wie du eine CSV-Datei in PowerShell lesen und beschreiben kannst:

```powershell
$csv = Import-Csv -Path "C:\\path\\to\\file.csv"
$csv | Format-Table
```

Die erste Zeile lädt den Inhalt der CSV-Datei in PowerShell und konvertiert ihn in ein PowerShell-Objekt. Die zweite Zeile formatiert das Objekt in einer Tabelle und gibt es aus.