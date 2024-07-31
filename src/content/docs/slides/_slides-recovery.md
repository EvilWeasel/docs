---
title: Desaster-Recovery
description: Hilfe zur Selbsthilfe mit Git. Undo, Undo, Undo...
---

In diesem Kapitel geht es um die Wege, wie wir mit Git einen beliebigen vorherig aufgenommenen Zustand wiederherstellen können. Je nachdem was genau schief gelaufen ist, müssen wir dafür unterschiedliche Wege gehen. Hier eine nicht 100% ausführliche Liste.

Wer sich fragt, warum eine nicht ausführliche Liste: Selbst wenn ich meine Git-History mit gewissen gefährlichen Commands "kaputt mache", kann man in den meisten Fällen auch diese Fehler irgendwie wieder ausbügeln. Das liegt vor allem daran, dass Git essentiell jede Änderung, welche ich mit `git add <Dateipfad>` aufnehme, eine eigene Datei im Object-Store abspeichert. Die Commits die wir erstellen sind essentiell einfache Pointer auf alle zu dieser Version gehörigen Dateien. Heißt für uns: Selbst wenn wir einen beliebigen Commit Mitten in der History einfach löschen, haben wir noch immer die entsprechenden Dateizustände im Object-Store. Falls euch so etwas mal passieren sollte, hier das entsprechende Kapitel im Git-Buch: https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery

TLDR: Nicht verzweifeln, Cool bleiben, und sich einen Kollegen mit Erfahrung in Git ranholen. Alles halb so wild.

## Einen Fehler im letzten Commit verbessern

Der wohl häufigste "Fehler" passiert, wenn man im Eifer des Gefechts, im letzten Commit einen Fehler gemacht hat. Etwa eine Datei vergessen, oder einen Fehler in der Nachricht gemacht. Diese Korrektur ist sehr einfach:

1. Stelle sicher, dass es sich wirklich um einen Fehler im letzten Commit handelt: Commits, welche schon weiter zurück liegen, sollte man auf diese Art nicht verändern (geht, aber mit mehr Aufwand).
2. Füge die vergessenen Dateien zur **Staging-Area** mit `git add <Dateipfad>` hinzu.
3. Nutze `git commit --amend` um einen neuen Commit zu erstellen. 
 
Git erstellt damit wie gewohnt einen neuen Commit, welcher, neben den Änderungen des letzten Commits, auch die gerade hinzugefügten Korrekturen enthält. Dieser neue, korrigierte Commit ersetzt dann den vorherigen Commit vollständig (anderer Commit-Hash). 

Hier ein Beispiel:

```shell
$ git commit -m 'Initial commit'
$ git add forgotten_file
$ git commit --amend
```

## `git revert`

todo:

---

**Vorsicht!**:

Im folgenden kommen einige *drastischere* Maßnahmen, für wenn mal wirklich alles in die Hose geht. Diese "Undo's" die hier aufgelistet sind, lassen sich **oft nicht rückgängig machen!**


**todo:** reset, rebase, cherry-pick, rewriting-history