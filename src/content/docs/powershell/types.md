---
title: Datentypen in Powershell
description: Eine Übersicht über die wichtigsten Datentypen in Powershell.
sidebar:
  order: 19
---

## Eingebaute Daten Typen

PowerShell verfügt über eine Vielzahl von eingebauten Daten Typen, darunter:

- `[string]`: eine Zeichenfolge
- `[int]`: eine ganze Zahl
- `[float]`: eine Fließkommazahl mit einfacher Genauigkeit
- `[double]`: eine Fließkommazahl mit doppelter Genauigkeit
- `[decimal]`: eine Festkommazahl mit hoher Genauigkeit
- `[bool]`: ein boolescher Wert (true/false)
- `[byte]`: ein Byte
- `[array]`: eine Sammlung von Werten
- `[hash table]`: eine Sammlung von Schlüssel-Wert-Paaren
- `[datetime]`: ein Datum und eine Uhrzeit

## Typkonvertierung

Oft müssen Werte in PowerShell von einem Typ in einen anderen konvertiert werden. Dies kann mit den folgenden Befehlen erreicht werden:

- `[string]$myInt = 5`: konvertiert eine ganze Zahl in eine Zeichenfolge
- `[int]$myString = "10"`: konvertiert eine Zeichenfolge in eine ganze Zahl

## Benutzerdefinierte Daten Typen

Neben den eingebauten Daten Typen können Benutzer auch ihre eigenen Daten Typen erstellen. Dies wird mit dem Befehl `New-Object` erreicht. Zum Beispiel können wir einen benutzerdefinierten Daten Typen für ein Auto erstellen:

```powershell
$car = New-Object PSObject
$car | Add-Member -Type NoteProperty -Name "Make" -Value "Toyota"
$car | Add-Member -Type NoteProperty -Name "Model" -Value "Corolla"
$car | Add-Member -Type NoteProperty -Name "Year" -Value 2021
```

## Funktion mit verschiedenen Datentypen

Die folgende Funktion erstellt einige Variablen mit unterschiedlichen Typen:

```powershell
function DataTypeExample {
    [string]$myString = "Hello World"
    [int]$myInt = 42
    [bool]$myBool = $true
    [float]$myFloat = 3.14
    [datetime]$myDate = Get-Date
    [xml]$myXml = "<root><element>data</element></root>"

    Write-Host "myString: $myString"
    Write-Host "myInt: $myInt"
    Write-Host "myBool: $myBool"
    Write-Host "myFloat: $myFloat"
    Write-Host "myDate: $myDate"
    Write-Host "myXml: $myXml"
}

DataTypeExample
```

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    E-mail VARCHAR(100) UNIQUE,
    Country VARCHAR(50),
    CONSTRAINT CHK_Country CHECK (Country IN ('USA', 'Canada', 'UK', 'Germany'))
);
```

# Beispiele

```powershell
# Typkonvertierung in PowerShell

# Schritt 1: Den Performance Counter für die CPU-Last abrufen
$PerfCounter = Get-Counter -Counter "\Processor(_Total)\% Processor Time" -SampleInterval 1 -MaxSamples 1

# Schritt 2: Den rohen CPU-Lastwert extrahieren
$RawCPULoad = $PerfCounter.CounterSamples.CookedValue

# Schritt 3: Typkonvertierung - den CPU-Lastwert in eine Ganzzahl konvertieren
$IntegerCPULoad = [int]$RawCPULoad

# Schritt 4: Ergebnisse anzeigen
Write-Host "Aktuelle CPU-Last (roh): $RawCPULoad"
Write-Host "Aktuelle CPU-Last (Ganzzahl): $IntegerCPULoad"
```
