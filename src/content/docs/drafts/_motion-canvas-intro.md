---
title: Motion-Canvas Einleitung
description: Gettings-Started with Motion-Canvas
---
Motion Canvas besteht aus zwei Hauptkomponenten:

- Eine TypeScript-Bibliothek, die Generatoren (`yield*`) verwendet, um Animationen imperativ zu programmieren.
- Ein Editor, der eine Echtzeitvorschau dieser Animationen bietet.

Es handelt sich um ein Werkzeug, das entwickelt wurde, um informative Vektoranimationen zu erstellen und sie mit Sprachaufnahmen zu synchronisieren.

Neben der Vorschau ermöglicht der Editor das Bearbeiten bestimmter Aspekte der Animation.

Motion Canvas ist ein kostenloses und Open-Source-Projekt.

# Schnellstart

In diesem Leitfaden lernen wir, wie wir eine einfache Animation mit Motion Canvas erstellen können.

## Voraussetzungen

Stelle sicher, dass Node.js Version 16 oder höher auf deinem Rechner installiert ist.

**Tipp:** Du kannst den folgenden Befehl ausführen, um zu überprüfen, ob Node.js bereits installiert ist:

```shell
node -v
```

## Ein neues Projekt erstellen

Führe den folgenden Befehl aus, um ein neues Motion Canvas-Projekt zu generieren (Wenn der Befehl fehlschlägt, siehe den Abschnitt zur Problembehandlung unten):

```shell
npm init @motion-canvas@latest
```

Beantworte die Fragen, um dein Projekt zu benennen und wähle aus, welche Sprache du verwenden möchtest; entweder TypeScript oder einfaches JavaScript. Wir empfehlen, TypeScript in deinem ersten Projekt zu verwenden, da dies die Sprache ist, die wir in dieser Dokumentation durchgehend verwenden.

Du wirst auch gefragt, wie du deine Animationen exportieren möchtest. Motion Canvas wird mit einem integrierten Bildsequenz-Exporter geliefert - perfekt, wenn du deine Animationen in eine Videobearbeitungssoftware importieren möchtest. Wenn du jedoch direkt ein fertiges Video produzieren möchtest, kannst du wählen, den Video (FFmpeg)-Exporter zu installieren. Keine Sorge, du kannst mehrere Exporteure auswählen, und du kannst jederzeit weitere hinzufügen.

Um den Einrichtungsprozess abzuschließen, musst du die folgenden Befehle ausführen:

### 1. Wechsel zum Projektverzeichnis

Ersetze `<project-path>` durch den Pfad, den du beim Einrichten ausgewählt hast:

```shell
cd <project-path>
```

### 2. Installiere die erforderlichen Abhängigkeiten:

```shell
npm install
```
### 3. Starte den Editor:

```shell
npm start
```

Der Editor ist unter [http://localhost:9000/](http://localhost:9000/) erreichbar. Wir werden ihn verwenden, um unsere Animation wiederzugeben, auch wenn es im Moment nicht viel zu sehen gibt.