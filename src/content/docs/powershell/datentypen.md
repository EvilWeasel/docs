---
title: Variablen und Datentypen
description: Powershell als Programmiersprache - Variablen und Datentypen
sidebar:
  order: 2
---

Variablen und Datentypen gibt es nicht nur in PowerShell, sondern in allen Programmier- und Scriptsprachen. Man kann sich Variablen als “Container” für Werte vorstellen. Datentypen geben an, welche Werte zulässig sind, und welche nicht.

## Variablen

In Powershell können Variablen mit dem $-Zeichen definiert werden. Es gibt verschiedene Datentypen wie z.B. String, Integer oder Boolean, die einer Variablen zugewiesen werden können. Variablen können auch innerhalb von Cmdlets und Skripten zur Weiterverarbeitung genutzt werden.

Ein Beispiel für die Deklaration und Initialisierung von Variablen in PowerShell:

```powershell title="variablen.ps1"
$Name = "Max Mustermann"
$Alter = 30
$IstVerheiratet = $false
```

In diesem Beispiel werden drei Variablen deklariert: `$Name` vom Typ String, `$Alter` vom Typ Integer und `$IstVerheiratet` vom Typ Boolean.

## Datentypen

In PowerShell gibt es unter anderem primitive Datentypen. Hier sind einige Beispiele:

- String: `$text = "Beispieltext"`
- Integer: `$zahl = 42`
- Boolean: `$wahrheitswert = $true`
- Double: `$zahlMitKommastellen = 3.14`
- Array: `$liste = @(1, 2, 3)`
- Hashtable: `$hashTabelle = @{Name="Max"; Alter=30}`
- Null: `$nichts = $null`

Es ist wichtig zu beachten, dass PowerShell auch dynamische Typisierung unterstützt. Das bedeutet, dass eine Variable ihren Datentyp automatisch ändern kann, wenn ihr ein Wert eines anderen Typs zugewiesen wird.

```powershell title="datentypen.ps1"
# Datentypen in PowerShell
$my_boolean = $true # Boolescher Wert
$my_integer = 1 # Ganzzahl
$my_double = 1.1 # Gleitkommazahl
$my_string = "Hallo Welt" # Zeichenkette
$my_date = Get-Date # 01.01.2019 00:00:00
$my_array = @(1,2,3) # Array / Liste
$my_object = @{Name = "Max"; Alter = 30} # Objekt
```

### Wertetypen

Wertetypen sind Datentypen, die den Wert selbst speichern und nicht auf eine Referenz verweisen. Das bedeutet, dass bei der Zuweisung einer Variablen an eine andere Variable der Wert selbst kopiert wird. Änderungen an der ursprünglichen Variablen beeinflussen die Kopie nicht.

Beispiele für Wertetypen in PowerShell sind:

- [Integer](https://docs.microsoft.com/en-us/dotnet/api/system.int32?view=net-5.0): Ganzzahlen
- [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean?view=net-5.0): Wahrheitswerte
- [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double?view=net-5.0): Fließkommazahlen
- [Decimal](https://docs.microsoft.com/en-us/dotnet/api/system.decimal?view=net-5.0): Dezimalzahlen
- [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=net-5.0): Datum und Uhrzeit

### Verweistypen

Verweistypen sind Datentypen, die auf eine Referenz zu einem Objekt im Speicher verweisen. Das bedeutet, dass bei der Zuweisung einer Variablen an eine andere Variable die Referenz kopiert wird, nicht der Wert selbst. Änderungen an der ursprünglichen Variablen beeinflussen auch die Kopie.

Beispiele für Verweistypen in PowerShell sind:

- [Array](https://docs.microsoft.com/en-us/dotnet/api/system.array?view=net-5.0): Arrays von Werten oder Objekten
- [Hashtable](https://docs.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-5.0): Hash-Tabellen mit Schlüssel-Wert-Paaren
- [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=net-5.0): Zeichenfolgen (auch wenn sie Wertetypen sein können, werden sie in PowerShell intern als Verweistypen behandelt)
- [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object?view=net-5.0): Basisklasse für alle anderen Klassen in .NET

```powershell title="verweistypen.ps1" {"1. Wertetyp - Zahl wird kopiert":2,3} {"2. Referenztyp - Neuer Verweis auf gleichen Wert im Speicher": 9,10} /"[5,7]"{1}/ /"31"/
$zahl = 5

$andererWert = $zahl
$zahl = 7
Write-Host "Wert von zahl: $zahl" # gibt "7" aus
Write-Host "Wert von andererWert: $andererWert" # gibt "5" aus

$objekt = [PSCustomObject]@{Name = "Max"; Alter = 30}

$anderesObjekt = $objekt
$objekt.Alter = 31
Write-Host "Wert von objekt.Alter: $($objekt.Alter)" # gibt "31" aus
Write-Host "Wert von anderesObjekt.Alter: $($anderesObjekt.Alter)" # gibt "31" aus
```

Es ist wichtig, zwischen Wertetypen und Verweistypen zu unterscheiden, da sie unterschiedlich behandelt werden, wenn sie einer Variablen zugewiesen werden. Bei Wertetypen wird der Wert selbst kopiert, während bei Verweistypen nur die Referenz auf das Objekt kopiert wird. Wenn also eine Variable geändert wird, die auf ein Objekt verweist, wird auch jede andere Variable, die auf das gleiche Objekt verweist, geändert. Bei Wertetypen ist das nicht der Fall, da sie unabhängig voneinander sind.
