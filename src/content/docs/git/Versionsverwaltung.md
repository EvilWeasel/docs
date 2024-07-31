---
title: Was ist Versionsverwaltung
description: Eine kurze Übersicht über Versionsverwaltung und die Rolle von Git in der modernen Softwareentwicklung und darüber hinaus.
sidebar:
  order: 1
---

Einfach erklärt ist Versionsverwaltung ein System, welches Änderungen über Zeit protokolliert.

In unserem konkreten Fall sprechen wir von Versionsverwaltung in der Softwareentwicklung. Dabei kann man Versionsverwaltungs-Systeme für alle möglichen Dateien nutzen, auch wenn es in manchen Fällen nicht sonderlich sinnvoll ist. Mehr dazu später.

Generell lässt sich sagen, dass Versionsverwaltung eine gute Sache ist. Im Prinzip ist es eine wesentlich genauere und nachvollziehbarere Variante eines Backup-Systems. Während ein rudimentäres Backup-System einfache Kopien eines Projektordnerts erstellt, am Besten noch mit Datum und Uhrzeit versehen, stößt so ein einfaches System in der modernen Softwareentwicklung schnell an seine Grenzen. So ein System ist aus vielerlei Sicht fehleranfällig:

- Arbeit im falschen Verzeichnis
- Bearbeitung der falschen Dateien
- Überschreiben von Dateien, welche man nicht überschreiben wollte

## Lokale VCS

Als Lösung für diese Probleme wurden lokale Versionsverwaltungssysteme gebaut. Diese verwalten alle relevanten Änderungen an Dateien in einer Art von Datenbank.

![](../assets/local.png)
*Abbildung 1. Lokale Versionsverwaltung - Auszug aus dem Git-Book Kapitel 1.1*

Die Ersten Versionsverwaltungssysteme haben Änderungen als Patches abgespeichert. Ein Patch beinhaltete alle Änderungen an allen Dateien, die von einer Version zur Nächsten verändert wurden. Hatte man die komplette Patch-History, konnte man alle Patches nacheinander anwenden, bis wir bei der gewünschten Version angekommen sind.

## Zentrale Versionsverwaltung

Lokale VCS waren schon einmal eine Erleichterung, aber was wenn wir mit mehreren Entwicklern auf anderen Systemen zusammenarbeiten möchte? 

Introducing: **CVCS** (Centralized Version Control System)

Beispiele für CVCS sind `Perforce` oder `Subversion`. Bei diesen Systemen gibt es einen zentralen Server, welcher das Repository inklusive aller Patches bereit stellt. Die Clients holen sich die Dateien vom Server, die sie bearbeiten wollen. Diesen Vorgang nennt man auch *Auschecken*.

![](../assets/centralized.png)
*Abbildung 2. Zentrale Versionsverwaltung - Auszug aus dem Git-Book Kapitel 1.1*

Da es lediglich einen zentralen Server gibt, wissen jederzeit alle Projektmitarbeiter, was die anderen gerade tun. Außerdem können Administratoren die Berechtigungen sehr genau definieren.

Der größte Nachteil liegt auf der Hand: Was wenn der zentrale VCS-Server nicht verfügbar ist? Jede Minute, wo der Server nicht erreichbar ist, übersetzt sich direkt in Produktivitätsverlust. Die Rechnung ist einfach: `Downtime Server * Anzahl Projektmitarbeiter = viel verbranntes Geld`... Yikes.

Ein zentrales System hat jedoch noch andere Probleme. Was, wenn die Festplatte kaputt geht? Was, wenn Mitarbeiter remote arbeiten und instabiles Internet haben? 

## Verteilte Versionsverwaltung

Git ist ein verteiltes Versionsverwaltungssystem, oder auch **DVCS**. Während bei einem zentralen System der Client lediglich die eine gewünschte Version auscheckt, bekommt bei Git jeder Client eine Kopie des gesamten Repositorys.
Das heißt, jede lokale Kopie enthält eine vollständige History über alle vorgenommenen Änderungen.

Wie Git das genau macht, lernst du im weiteren Verlauf dieses Tutorials. 

![](../assets/distributed.png)
*Abbildung 3. Verteilte Versionsverwaltung - Auszug aus dem Git-Book Kapitel 1.1*

Da das System dezentral ist, kann es hier auch mehrere Remote-Server geben, sodass verschiedene Gruppen von Projektmitarbeitern simultan auf verschiedene Art und Weise partizipieren können. Somit unterstützt Git jeden erdenklichen Workflow, was mit zentralen Systemen nur schwer funktioniert.