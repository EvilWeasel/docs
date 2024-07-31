---
title: Wie funktioniert Git eigentlich?
description: Eine Übersicht über die Themen in diesem Einsteiger-Guide für Git.
sidebar:
  order: 0
---

Um mit Git in Symbiose zusammen arbeiten zu können, sollte man die zugrundelegenden Einzelteile, aus denen das Tool besteht, verstehen und einordnen können. Dazu teilen wir dieses Tutorial in die folgenden Kapitel ein:

## 0. Was ist eigentlich Versionsverwaltung?

Wie jedes gute Tutorial starten wir mit einer kleinen *Geschichtsstunde* und *Erläuterung*. Vielleicht nicht der spannendste Start, aber um zu verstehen, welchen *Mehrwert* uns Git konkret bringt, und warum es die moderne Softwareentwicklung so sehr geprägt hat, hilft es zu verstehen, was Git von anderer Versionsverwaltungssoftware abhebt.

[Versionsverwaltung](/git/versionsverwaltung)

## 1. Das Konzept

*Was* ist die Idee hinter Git? *Warum* wurde es entwickelt? *Weshalb* ist es so drastisch unterschiedlich, von den Konkurrenten seiner Zeit? Die Beantwortung dieser Fragen scheint auf dem ersten Blick nicht essentiell, und das ist sie vielleicht auch nicht. Sie lässt uns aber die Struktur und Arbeitsweise, welche ja bewusst gewählt wurde, besser nachvollziehen.

[Das Konzept](/git/konzept)

## 2. Das Interface

Zu wissen, wo das Programm herkommt ist schön und gut. Letztendlich ist aber wesentlich interessanter, wie wir damit möglichst produktiv arbeiten können. Darum soll es hier gehen. Die *Commands*. Der *Workflow*. Wie gehe ich mit *Branches* richtig um? Wie mache ich ein *Undo*? Was, wenn ich mal die *Historie* komplett bearbeiten muss? Wie geht *Kollaboration*?
**Wie funktioniert das Interface?**

[Das Interface](/git/interface)

## 3. Die Objekte

Die kleinste Maßeinheit in Git, sind die sogenannten **Git-Objects**. Das sind nichts anderes als Dateien, welche unterschiedliche Zwecke erfüllen. Von diesen Git-Objekten gibt es *3 Typen*, welche in jedem Repository eine wichtige Rolle spielen. Was ist denn, beispielsweise, wenn man eine Kopie einer Datei in Git abspeichert, mit lediglich einer Namensänderung? Wird die *Datei doppelt* in die Datenbank gespeichert? Was meint Git eigentlich mit *"pushing refs"*?

[Git Objekte](/git/objects)
