---
title: Dotnet CLI
description: Wie man C# Projekte mit dem Dotnet CLI managen kann.
---

In diesem Artikel konzentrieren wir uns darauf, wie du deine C#-Projekte mit dem `dotnet` CLI erstellen und managen kannst. 

## Projekte erstellen

### 0. Projekt-Template wählen

Mit dem Dotnet CLI können wir die gleichen Templates, welche in Visual Studio zur Verfügung stehen, nutzen.

```shell
dotnet new list # List alle lokal verfügbaren Projekttemplates
```

### 1. Neues Projekt erstellen

Hast du eine Template gewählt, öffne die Konsole und navigiere zum Ordner, in dem du das Projekt erstellen möchtest. Gib dann den folgenden Befehl ein:

```shell
dotnet new webapi
```

Hier wird ein neues WebAPI-Projekt mit dem Namen des aktuellen Ordners erstellt. Du kannst den Namen und den Pfad des Projekts nach deinen Wünschen wie folgt anpassen.

```shell
dotnet new webapi -o ./awesome-api
```

### 2. In das Projektverzeichnis wechseln

Navigiere in das Verzeichnis des erstellten Projekts:

```shell
cd awesome-api
```

## Das Projekt managen

### 1. Das Projekt öffnen

Verwende einen Code-Editor oder eine integrierte Entwicklungsumgebung (IDE) deiner Wahl, um das Projekt zu bearbeiten. Öffne dazu den Projektordner:

```shell
code .
```

### 2. Das Projekt kompilieren und ausführen

Um sicherzustellen, dass alles reibungslos funktioniert, kompiliere und führe das Projekt aus:

```shell
dotnet build
dotnet run
```

### 3. Dev-Server

Um dafür zu sorgen, dass der Server automatisch neustartet, sobald wir eine Änderung speichern, nutze diesen Command:

```shell
dotnet watch run
```

## Mehrere Projekte mit Solution managen

Wenn wir mehrere Projekte, wie z.B. eine API und ein Frontend haben möchten, können wir, wie in Visual Studio üblich, auch eine Solution-File erstellen.

```shell
dotnet new sln -n awesome-project
```

### Projekte zu Solution hinzufügen

```shell
# dotnet new webapi -o ./awesome-api
# dotnet new blazorwasm -o ./awesome-client
dotnet sln add ./awesome-api
dotnet sln add ./awesome-client
dotnet sln list # Zeigt Liste mit allen Projekten
```

## Weitere nützliche Befehle

### 1. Referenzen hinzufügen

Wenn du Abhängigkeiten zu deinem Projekt hinzufügen möchtest, verwende:

```shell
dotnet add package <DeinPaketName>
```

### 2. Projektabhängigkeiten wiederherstellen

Wenn du mal Probleme mit den Projektabhängigkeiten hast, führe folgenden Befehl aus:

```shell
dotnet restore
```

