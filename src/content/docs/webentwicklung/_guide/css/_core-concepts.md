---
title: Grundlagen
description: Einen Überblick über die essentiellsten CSS-Konzepte.
---


**Was bedeutet CSS?**

CSS ist eine Abkürzung und steht für “Cascading Style Sheets” in Deutsch übersetzt bedeutet das “Kaskadierende Stilvorlagen”.

CSS ist eine Stylesheet-Sprache und keine Programmiersprache. Mit CSS werden Gestaltungs- Animations- und Link-Anweisungen für HTML erstellt. Diese Gestaltungsanweisungen machen die Website schön. 🙂

CSS dient auch der Trennung von Inhalten (HTML) und Gestaltung (CSS). Wobei man hier zwischen den einzelnen CSS-Schreibweisen unterscheiden muss.

**Welche Arten von CSS gibt es?**

Insgesamt gibt es drei Arten von CSS Schreibweisen, welche man je nach Situation anwenden kann.

[1.1.1 Inline CSS](1%201%20CSS%20-%20Grundlagen%20b368b9d47c024528828aee589cd68daa/1%201%201%20Inline%20CSS%204b4a4f7dcd724e80b8406442f1b703a4.md)

[1.1.2 Internal CSS](1%201%20CSS%20-%20Grundlagen%20b368b9d47c024528828aee589cd68daa/1%201%202%20Internal%20CSS%20d678f0ada02b47a588da4d868da6581f.md)

[1.1.3 External CSS](1%201%20CSS%20-%20Grundlagen%20b368b9d47c024528828aee589cd68daa/1%201%203%20External%20CSS%20043021ce366e40c8b43dd64c20e2ceae.md)

Beim Inline CSS, werden die Gestaltungsanweisungen eines HTML-Elementes direkt im Tag selbst definiert. Bei Internal CSS, werden die Gestaltungsanweisungen innerhalb des `<style>` Elements im `<head>` Bereich definiert. Das External CSS, wird wie der Name schon sagt, in einer externen style.css erstellt. Und wird dann im `<head>` Bereich des HTML-Dokuments verankert.

Gängige Praxis ist allerdings External CSS.

Vorteil 1: Lässt sich einfacher warten

Vorteil 2: Kann von mehr als einer Webseite verwendet werden. Somit wieder verwendbar

Vorteil 3: Trennt HTML und CSS vollständig von einander

WICHTIG: Bei allen drei Schreibarten, sei allerdings darauf hingewiesen. Je näher sich das Style-Attribut am Tag befindet, um so höher steht es in der Verarbeitungs-Hierarchie. Das Inline CSS kommt als erstes, dann folgt das Internal CSS und als letztes wird das External CSS auf ein Tag-Element angewendet.
