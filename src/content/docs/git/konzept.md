---
title: Das Konzept
description: Was ist Git? Warum ist Git? Und vorallem - Wie ist Git?
sidebar:
  order: 2
---

`Git` ist, in kürze beschrieben, ein verteiltes Versionsverwaltungssystem für Quellcode.

Das legendäre Spiel RollerCoaster Tycoon aus dem Jahr 1999 wurde von einer einzelnen Person namens Chris Sawyer in `x86_assembly` programmiert.
Im Gegensatz dazu, arbeiten heute große Teams, teilweise auch über Ländergrenzen hinweg, gemeinsam am gleichen Projekt. Da kann man ja auch mal, ganz naiv, die Frage stellen:

> Wie funktioniert das eigentlich, dass sich diese ganzen Entwickler dabei nicht in die Quere kommen?

Zur Beantwortung dieser Frage brauchen wir allerdings noch ein paar Basics.

## Snapshots vs Diffs

Wer sich aus der Fachinformatikerausbildung an Backupstrategien erinnert, wird wissen, dass es dabei essentiell 3 Varianten gibt:

### Vollständige Datensicherung

Hierbei wird eine eins zu eins Kopie des Dateisystems gemacht, für jedes Backupintervall (z.B. Wöchentlich). Die Vor- und Nachteile sind offensichtlich: Wiederherstellung ist einfach und schnell aber benötigt viel Speicher.

### Differenzielle Datensicherung

Dabei werden, neben den Vollbackups regelmäßige differenzielle Backups gemacht. Differenziell, weil sie die nur die Differenz abbilden aus: 

$$\text{{Differenzielles Backup}} = \text{{Aktueller Zustand}} - \text{{letztes Vollbackup}}$$

Die Referenz, die als Vergleich zum aktuellen Zustand genommen wird, und somit die Basis für das Backup diktiert, ist beim Differenziellen Backup immer ein Vollbackup.

### Inkrementelles Backup

Um es einfach zu halten: Das ist im Grunde wie ein Differenzielles Backup (wir vergleichen wieder Zustände), die Basis hierbei ist aber einfach das letzte Backup. Das heißt, ich kann bei einer inkrementellen Backup-Strategie den vollständigen Zustand nur erreichen, wenn ich die komplette Historie an Änderungen zurück gehe, bis zu dem Punkt, an dem diese Änderung zum ersten Mal aufgetaucht ist.

Wenn wir den Vergleich zu VCS ziehen, dann könnten wir sagen, dass `perforce` oder `subversion` ähnlich arbeiten. Diese VCS speichern die initiale Datei und dann einfach alle Änderungen, als sogenannte Diffs, die über die Zeit entstanden sind. Man bezeichnet solche Systeme auch als **Delta-Basiert**.

### Okay, cool... Was davon macht Git jetzt?

Gar nicht so einfach zu sagen. Ein bisschen was von beiden vielleicht? 

In Git ist das wichtigste Element der sogenannte Commit. Ein Commit ist eine Datenstruktur, welche unseren Snapshot abbildet. Er enthält alle Informationen, welche Git benötigt, um den Worktree, das Arbeitsverzeichnis, wieder in den gewünschten Zustand zu bringen. Außerdem enthält ein Commit diverse Metadaten über Author oder sogar seine Signatur.

## Staging Bereich

Bevor wir einen neuen Snapshot (Commit) erstellen können, müssen wir Git mitteilen, welche Änderungen wir in diesem Snapshot aufnehmen wollen. Warum wir das machen müssen, ist recht einfach erklärt.
Stellen wir uns dafür mal einen "normalen Arbeitsablauf" an:

Nehmen wir an, wir sollen an diesem Tag zur Website eines Kunden die Impressumsseite mit der neuen Firmenanschrift aktualisieren. Außerdem wurden die Farben des CI (Corporate Identity) geändert. Deshalb müssen wir auf der Index-Seite die Farbe aller primären Buttons ändern.

Natürlich fangen wir mit der einfacheren Änderung (dem Impressum) an. Da das relativ schnell ging, fangen wir direkt damit an, die Buttons auf der Index-Seite anzupassen. Aber jetzt gilt VORSICHT!

Wenn wir alle Änderungen in einen einzelnen Commit packen, dann können wir die Änderungen nur gemeinsam wieder zurücksetzen, falls im Nachhinein ein Bug entdeckt wird. 

In meinem kleinen ausgedachten Szenario ist das wahrscheinlich kein großes Ding. Wenn wir allerdings an einer "kritischen" Software arbeiten, bei der jede Minute Downtime ein echtes Problem darstellt, dann kann so eine kleine Nachlässigkeit eine lange Kette von Problemen mit sich ziehen.

Okay, manchmal passiert so eine Situation einfach, vor allem wenn man als Programmierer im flow ist. Aber genau dafür hat Git den sogenannten **Staging Bereich**.

### Der Index

Der **Staging-Bereich**, gerne auch als Index bezeichnet, ist ein einfacher Zwischenschritt, bei dem wir alle Änderungen, welche im nächsten Commit aufgezeichnet werden, hinterlegen.

Um eine Datei diesem Index hinzuzufügen, nutzen wir den `git add <Dateipfad>` Command.

Auf mein vorheriges Szenario übertragen bedeutet das, dass wir nicht einfach alle Dateien mit `git add .` hinzufügen und nur einen Commit erstellen, sondern wir wie folgt vorgehen (Kann zwischendurch, oder zum Feierabend erledigt werden):

1. Füge alle Dateien für die erste atomare Änderung mit `git add <Änderungen der Impressums-Seite>` hinzu.
2. Wir schreiben einen neuen Snapshot mit `git commit` und beschreiben die Änderungen in der Commit-Message.
3. Wir wiederholen Schritt 1-2 für alle atomaren Änderungen.

Atomar bedeutet, in diesem Kontext, dass wir nicht alle Änderungen in einen Topf werfen, sondern für jedes Feature und jeden Bugfix einen selbstständigen Commit erstellen.
Damit lässt sich sicherstellen, dass wenn wir zu einem späteren Zeitpunkt ein Problem mit einer dieser Änderung feststellen, dass wir diese Änderungen schnell wieder zurücksetzen können.

### Hunks

Vielleicht habt ihr schon das offensichtliche Problem mit dem vorherig beschriebenen Workflow festgestellt:
Wenn ich vergesse eine dieser atomaren Änderungen direkt zum Staging-Bereich hinzuzufügen, dann hab ich gegebenfalls 2 dieser eigentlich eigenständigen Änderungen in der gleichen Datei. Jetzt wäre es aber auch Irsinn diese Änderungen wieder rückgängig zu machen, nur um eine saubere Git-History zu bekommen. 
Genau für diesen Zweck können wir auch mit `git add -i` interaktiv einzelne Änderungen aus Dateien zum Staging-Bereich hinzufügen. Das heißt, wenn wir beispielhalber innerhalb einer HTML-Datei eine Änderung in Zeile 5-7 und eine andere seperate Änderung in Zeile 50-55 gemacht haben, können wir zuerst die Änderungen im Header stagen und committen, und danach, in einem seperaten Commit, die Änderungen aus Zeile 50-55 stagen und in einem eigenen Commit festhalten.

Um es zusammenzufassen:
Wir können mit *interactive-staging* mehrere Änderungen selbst innerhalb der gleichen Datei in seperate Commits partitionieren. Im folgenden eine kurze, knackige Beschreibung des Prozesses. 

HINT: 
Falls ihr mehr Details zum interactive-mode für `git add` Wissen möchtet, hier der Link zum Git-Buch: https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging#
Es gibt auch viele Youtube Videos zu dem Thema, falls das in Text-Form nicht so einfach nachzuvollziehen ist. Sucht dafür nach `git add --interactive` :)

```shell
$ git add -i
           staged     unstaged path
  1:    unchanged        +0/-1 TODO
  2:    unchanged        +1/-1 index.html
  3:    unchanged        +5/-1 lib/simplegit.rb

*** Commands ***
  1: [s]tatus     2: [u]pdate      3: [r]evert     4: [a]dd untracked
  5: [p]atch      6: [d]iff        7: [q]uit       8: [h]elp
```
