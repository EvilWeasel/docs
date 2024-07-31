---
title: Pattern-Matching
description: Wie man mit Pattern-Matching in Powershell arbeiten kann.
sidebar:
  order: 18
---

Reguläre Ausdrücke sind spezielle Zeichenfolgen, die verwendet werden, um Muster in Texten zu definieren und zu suchen. Reguläre Ausdrücke werden in vielen Programmiersprachen und Texteditorn verwendet. Sie sind besonders nützlich, wenn man nach bestimmten Mustern in großen Texten suchen oder Texte automatisch bearbeiten möchte.

Reguläre Ausdrücke bestehen aus speziellen Zeichen, die als Tokens bezeichnet werden. Zur Vereinfachung werde ich diese Tokens im folgenden in 2 grobe Kategorien einteilen. Im allgemeinen werden diese allerdings alle einfach als Tokens bezeichnet.

[regex101: build, test, and debug regex](https://regex101.com/)

## Die wichtigsten Text-Objekte

Die erste Kategorie würde ich als **Text-Objekte** bezeichnen. Das sind also die Zeichen, welche wir selektieren wollen. Text-Objekte sind dabei allerdings mehr als ein einfacher Suchbegriff, wie z.B. “Hello” in “Hello World”. Folgend ist eine Liste mit den essentiellen Text-Objekten, welche wir in unserer RegEx Suche verwenden können.

- **`\w`**: Übereinstimmung mit einem Wortzeichen (a-z, A-Z, 0-9 oder _)
- **`\d`**: Übereinstimmung mit einer Ziffer (0-9)
- **`\s`**: Übereinstimmung mit einem Leerzeichen (Leerzeichen, Tabulator, Zeilenumbruch usw.)
- `\n`: Newline Character
- `\t`: Tab Character
- Die oben erwähnten Selektionen kann man auch **umkehren, indem man den Buchstaben groß schreibt**, z.B. `\W` für alles was kein Wortzeichen ist oder `\D` für alles was keine Ziffer ist.
- `.` - Steht für jedes Zeichen

## Die wichtigsten Modifier

Diese Zeichen quantifizieren und qualifizieren meine selektierten Zeichen.

- `*` - Steht für null oder mehr Vorkommen des vorherigen Zeichens
- `+` - Steht für ein oder mehr Vorkommen des vorherigen Zeichens
- `?` - Steht für null oder ein Vorkommen des vorherigen Zeichens
- `[...]` - Steht für eine Gruppe von Zeichen
- `{<min>,<max>}` - Steht für die Anzahl der Vorkommen des vorherigen Zeichens (z.B. `\d{2,4}` selektiert eine Zahlenfolge mit 2-4 Zahlen)
- **`^`**: Übereinstimmung mit dem Anfang einer Zeile oder eines Strings
- **`$`**: Übereinstimmung mit dem Ende einer Zeile oder eines Strings
- **`|`**: Alternativen (z. B. **`a|b`** für entweder "a" oder "b")

## Pattern-Matching in PowerShell

In PowerShell können Benutzer den "-match"-Operator verwenden, um eine RegEx-Suche durchzuführen. Der "-match"-Operator gibt "True" zurück, wenn eine Übereinstimmung gefunden wird, und "False", wenn keine Übereinstimmung gefunden wird.

### Einfache Zeichenketten finden

```powershell
# Beispiel-Text
$text = "Mein Computername ist PC1234."

# Regex zum Finden von 'Computername'
$regex = 'PC1234'

# Text suchen und anzeigen
if ($text -match $regex) {
    "Gefunden: $($matches[0])"
}
```

### Zahlen finden

```powershell
# Beispiel-Text
$text = "Mein Computername ist PC1234."

# Regex zum Finden von Zahlen
$regex = '\d+'

# Zahlen extrahieren
$numbers = $text | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value }
$numbers
```

### Wörter mit bestimmten Anfangsbuchstaben finden

```powershell
# Beispiel-Text
$text = "Alice hat 5 Äpfel und Bob hat 3 Bananen."

# Regex zum Finden von Wörtern, die mit 'B' oder 'b' beginnen
$regex = '\b[Bb]\w+'

# Wörter extrahieren
$words = $text | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value }
$words
```

### E-Mail-Adressen finden

```powershell

# Beispiel-Text
$text = "Alice's E-Mail-Adresse ist alice@example.com und Bob's E-Mail-Adresse ist bob@example.com."

# Regex zum Finden von E-Mail-Adressen
$regex = '\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

# E-Mail-Adressen extrahieren
$emails = $text | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value }
$emails
```

### Windows-Benutzernamen finden

```powershell

# Beispiel-Text
$text = "User1 ist ein Administrator und User2 ist ein normaler Benutzer."

# Regex zum Finden von Windows-Benutzernamen (z.B. User1, User2)
$regex = 'User\d+'

# Benutzernamen extrahieren
$usernames = $text | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value }
$usernames
```

### Dateinamen mit bestimmter Dateierweiterung finden

```powershell

# Beispiel-Text
$text = "Dokument1.docx, Präsentation1.pptx und Tabelle1.xlsx sind im Ordner gespeichert."

# Regex zum Finden von .docx-Dateien
$regex = '\b\w+\.docx\b'

# Dateinamen extrahieren
$filenames = $text | Select-String -Pattern $regex -AllMatches | ForEach-Object { $_.Matches.Value }
$filenames
```

## Regex: Capture Groups und Named Groups

In regulären Ausdrücken (regex) gibt es zwei Arten von Gruppierung: Capture Groups und Named Groups. Diese Gruppierungen ermöglichen es, bestimmte Muster innerhalb eines Strings zu identifizieren und auszuwählen.

### Capture Groups

Capture Groups sind Gruppen innerhalb eines regulären Ausdrucks, die durch Klammern definiert werden. Sie ermöglichen es, Teile des gefundenen Musters zu extrahieren.

Beispiel:

```powershell
$string = "Das ist ein Beispieltext mit einer Zahl 123"
$pattern = "mit einer Zahl (\d+)"
$result = $string | Select-String -Pattern $pattern

if($result){
    $result.Matches.Groups[1].Value  # Ausgabe: 123
}
```

Hier wird das Muster **`mit einer Zahl (\d+)`** verwendet, um nach einer Zahl im String zu suchen. Die Zahl wird innerhalb der Capture Group **`(\d+)`** definiert und kann mit **`$result.Matches.Groups[1].Value`** extrahiert werden.

### Named Groups

Named Groups sind benannte Capture Groups, die es einfacher machen, auf die erkannten Teile des Musters zuzugreifen. Sie werden durch die Syntax **`(?<name>pattern)`** definiert, wobei **`name`** der Name der Gruppe ist.

Beispiel:

```powershell
$string = "John Doe, 23 Jahre alt"
$pattern = "(.+), (\d+)"
$result = $string | Select-String -Pattern $pattern

if($result){
    $name = $result.Matches.Groups[1].Value  # Ausgabe: John Doe
    $nr = $result.Matches.Groups[2].Value  # Ausgabe: 23
    Write-Host $name
    Write-Host $nr
}
```

Hier wird das Muster **`(?<name>\w+) (?<nr>\d+)`** verwendet, um nach einem Namen und einer Zahl im String zu suchen. Die benannten Capture Groups **`(?<name>\w+)`** und **`(?<nr>\d+)`** ermöglichen es, auf die erkannten Teile des Musters mit den entsprechenden Namen **`name`** und **`nr`** zuzugreifen.

Das Verwenden von Named Groups kann besonders nützlich sein, wenn Sie mit komplexen regulären Ausdrücken arbeiten und es schwierig sein kann, den Überblick darüber zu behalten, welche Capture Group welche Teile des Musters extrahiert.

```powershell
# Beispiel-Text
$text = "Das Datum ist 2023-04-08."

# Regex mit Capture Groups zum Extrahieren von Jahr, Monat und Tag
$regex = '(\d{4})-(\d{2})-(\d{2})'
$result = $text -match $regex
if ($result) {
    "Jahr: $($matches[1]), Monat: $($matches[2]), Tag: $($matches[3])"
}
```

```powershell
# Beispiel-Text
$text = "Das Datum ist 2023-04-08."

# Regex mit Named Capture Groups zum Extrahieren von Jahr, Monat und Tag
$regex = '(?<Jahr>\d{4})-(?<Monat>\d{2})-(?<Tag>\d{2})'

if ($text -match $regex) {
    "Jahr: $($matches['Jahr']), Monat: $($matches['Monat']), Tag: $($matches['Tag'])"
}
```

### Named Groups mit mehreren Matches

```powershell
$string = "John Doe, 23 Jahre alt; Jane Smith, 30 Jahre alt"
$pattern = "(?<name>\w+\s\w+),\s(?<age>\d+)"
$matches = $string | Select-String -Pattern $pattern -AllMatches

foreach ($match in $matches.Matches) {
    $name = $match.Groups["name"].Value
    $age = $match.Groups["age"].Value
    Write-Output "Name: $name, Age: $age"
}
```
