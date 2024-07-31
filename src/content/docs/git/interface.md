---
title: Git - Das Interface
description: Eine Übersicht über die wichtigsten Git-CLI Befehle.
sidebar:
  order: 3
---

## `git init`

Erstellt ein neues Git Repository im aktuellen Ordner. Initialisiert den Object-Store, den Ref-Store und die Konfigurationsdateien.

## `git config --global`

Lässt einen die globale `.gitconfig` Datei (im User-Home) bearbeiten. Diese Einstellungen sind dann *default* für alle Git-Repositories.

**Beispiele:**

Setze den Namen des Git Benutzers:
`git config --global user.name "<your-name>" && git config --global user.email "<your-email>"`

Setze die Email-Adresse des Git Benutzers. Falls ihr mit Github arbeitet, empfiehlt es sich, nicht die private Email hier anzugeben, da diese in jedem Commit steht. Github bietet jedem Benutzer, über die Email-Einstellungen, eine kostenlose No-Reply-Email Adresse zur freien Nutzung an.

`git config --global user.email "<your-email>"`

# Basic Git Workflow

Ein einfacher Git Workflow besteht aus 2 Arbeitsschritten:

1. Alle Änderungen, bzw. alle Dateien die geändert wurden, müssen für den nächsten Commit mit `git add <Datei/en>` hinzugefügt werden.
2. Wir schreiben einen neuen **Commit**. Dieser Commit enthält eine Liste mit allen Änderungen, welche wir mit `git add` hinzugefügt haben. Dazu kommen noch der *Author* und eine *Commit-Message*, welche die Änderungen beschreiben. 

## `git add`

Nimmt eine beliebig lange Liste an Dateien, Patterns oder einen Wildcard-Character * und fügt die Dateien zum Staging-Bereich hinzu.

```shell
➜ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        example.txt
        test.md

nothing added to commit but untracked files present (use "git add" to track)

➜ git add . # Wildcard für "Alle Dateien in diesem Ordner und allen Unterordnern"
➜ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   example.txt
        new file:   test.md
```

## `git commit`

Ohne zusätzliche Parameter, öffnet Git den im Voraus konfigurierten Editor, wo wir dem Commit eine detaillierte Nachricht eingeben sollen. Wir können allerdings mit `git commit -m <Message>` die Nachricht direkt in der Konsole eingeben.

```shell
➜ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   example.txt
        new file:   test.md


test [ main][+]
➜ git commit -m "Das ist ein Test"
[main (root-commit) af04405] Das ist ein Test
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 example.txt
 create mode 100644 test.md

test [ main]
➜ git status
On branch main
nothing to commit, working tree clean

test [ main]
➜ git log
commit af04405d262180b7ee43654590a3082a1a048ebb (HEAD -> main)
Author: evilweasel <38261180+EvilWeasel@users.noreply.github.com>
Date:   Fri Mar 8 19:00:54 2024 +0100

    Das ist ein Test
```

### Digitale Signatur im Commit

Wer mit **GPG** ein Schlüsselpaar erstellt hat, kann mit seinem private-key die Commits signieren. Dafür nutzen wir den `git commit -S -m <Message>` Command.

```shell
git commit -S -m "Hier könnte Ihre Werbung stehen!"
```

## Verzweigungen in der History

Manchmal macht es Sinn in zwei verschiedenen Branches zu arbeiten. Diese Branches repräsentieren eine Verzweigung in der Geschichte des Repositories. Um einen Branch für z.B. ein neues Feature zu erstellen, nutze folgenden Command:

```shell
git checkout -b feature # shortcut für "erstelle einen neuen branch 'feature'" und "wechsel auf den branch 'feature'"
```

## Branches Zusammenführen

Um eine Verzweigte History wieder zusammenzuführen, z.B. um das fertige Feature in den `main` Branch zu integrieren nutzen wir den `merge` Command

```shell
git checkout main # Wir nutzen `main` als Basis
git merge feature # Und mergen die Änderungen die noch exclusiv in feature vorhanden sind
```

todo: conflict

# Arbeiten mit Remote-Repositories

Damit wir über mehrere Maschinen und mit anderen Menschen zusammen arbeiten können, brauchen wir einen Git Server, welcher den Clients ermöglicht, die getätigten Änderungen untereinander zu verteilen. Git-Server sind einfache Remote-Repositories oder Development-Plattformen wie Azure DevOps, Github, Gitlab oder dergleichen.
Wenn wir die URL für ein Remote-Repository haben, können wir wie folgt diesen unserem lokalen Repository hinzufügen.

```shell
git remote add origin <URL> # origin hier ist arbiträr, aber definiert als der default für neue remotes
```

Nun können wir mit dem `git push` Command unsere History und alle neuen Änderungen auf den Server hochladen. Für den ersten Push auf einen neuen Remote müssen wir allerdings Git explizit sagen, welchen Branch wir auf welchen Remote pushen wollen.

```shell
git push -u origin main # "hey git: wenn ich `git push` sage, dann möchte ich den main-branch auf den remote namens 'origin' hochladen"
```

Jeder folgende `git push` Command ohne zusätzliche Parameter, lädt die Commit-History des Main Branches auf den origin Remote hoch.

## Remote bearbeiten

In folge eine Reihe an nützlichen Commands im Zusammenhang mit Remote-Repositories wie Github, Gitlab oder dergleichen. Anstelle von `origin` kann hier ein beliebiger anderer Remote stehen.

### Einen Remote wieder entfernen

```shell
git remote remove origin
```

### Remote-URL prüfen

```shell
git remote get-url origin
```

### Remote-URL ändern

```shell
git remote set-url origin <neue URL>
```



