---
title: Was wenn?
description: Powershell-Scripte sicher testen mit dem "-WhatIf" Parameter
---

Der PowerShell-Parameter "WhatIf" ermöglicht es, PowerShell-Skripte zu testen, ohne dass tatsächliche Änderungen an der betreffenden Umgebung vorgenommen werden. Dadurch können potenzielle Auswirkungen von Skripten oder Befehlen überprüft werden, bevor sie tatsächlich ausgeführt werden. Dies ist besonders nützlich, um unerwünschte Auswirkungen auf das System zu vermeiden, wenn der Skript-Code nicht einwandfrei funktioniert.

## Beispiel 1: Löschen von Dateien

```powershell
# Zeigt an, welche Dateien gelöscht werden würden, ohne dass sie tatsächlich gelöscht werden
Remove-Item "C:\\Temp\\*.txt" -WhatIf

# Löscht tatsächlich die Dateien
Remove-Item "C:\\Temp\\*.txt"
```

In diesem Beispiel wird der Parameter "WhatIf" verwendet, um zu zeigen, welche Dateien gelöscht werden würden, wenn der Befehl tatsächlich ausgeführt würde. Auf diese Weise kann man sicherstellen, dass nur tatsächlich zu löschende Dateien entfernt werden, ohne versehentlich wichtige Dateien zu löschen.

## Beispiel 2: Erstellen von Verzeichnissen

```powershell
# Zeigt an, welche Verzeichnisse erstellt werden würden, ohne dass sie tatsächlich erstellt werden
New-Item -ItemType Directory -Path "C:\\Temp\\NewFolder" -WhatIf

# Erstellt tatsächlich das Verzeichnis
New-Item -ItemType Directory -Path "C:\\Temp\\NewFolder"
```

Dieses Beispiel zeigt, wie "WhatIf" verwendet werden kann, um zu zeigen, welche Verzeichnisse erstellt würden, wenn der Befehl tatsächlich ausgeführt würde.
