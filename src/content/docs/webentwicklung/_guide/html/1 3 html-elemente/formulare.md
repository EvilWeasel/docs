---
title: HTML-Formulare
description: Alles wissenswertes über HTML-Formulare.
---


```markdown
# Formulare
Beginn: <form>
Source: input, label, select, option ...
Ende: </form>
```

Formulare sind ein wichtiger Bestandteil von Webseiten und ermöglichen die Interaktion zwischen Benutzern und Webseiten. Sie werden häufig verwendet, um Benutzereingaben zu sammeln, wie z.B. Kontaktinformationen, Zahlungsdetails, Feedback und mehr.

Ein HTML-Formular wird mit dem `<form>`-Tag erstellt. Innerhalb dieses Tags können verschiedene Arten von Eingabeelementen platziert werden, darunter Textfelder, Auswahllisten, Checkboxen, Radiobuttons und Buttons.

Hier ist ein einfaches Beispiel für ein HTML-Formular:

**Code-Beispiel:**

```html
<form action="/submit_form" method="post">
    <label for="fname">Vorname:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Nachname:</label><br>
    <input type="text" id="lname" name="lname"><br>
    <input type="submit" value="Absenden">
</form>
```

**Ausgabe im Browser:**

![Untitled](1%203%207%20Formulare%202d0afe9deb144f23803766f6221911ee/Untitled.png)

In diesem Beispiel gibt es zwei Texteingabefelder für den Vornamen und den Nachnamen. Jedes Eingabefeld ist mit einem `<label>`-Tag gekoppelt, das den Namen des Feldes anzeigt. Das `for`-Attribut im `<label>`-Tag sollte mit der `id` des zugehörigen Eingabefelds übereinstimmen, um die Zugänglichkeit zu verbessern.

Das `action`-Attribut im `<form>`-Tag gibt die URL an, an die das Formular gesendet werden soll, wenn der Benutzer auf den "Absenden"-Button klickt. Das `method`-Attribut gibt die HTTP-Methode an, die für die Übermittlung des Formulars verwendet werden soll (in diesem Fall "post").

Hier ist ein weiteres Beispiel, das zeigt, wie man eine Auswahlliste, Checkboxen und Radiobuttons in einem Formular verwendet:

**Code-Beispiel:**

```html
<form action="/submit_form" method="post">
    <label for="country">Land:</label><br>
    <select id="country" name="country">
        <option value="deutschland">Deutschland</option>
        <option value="usa">USA</option>
        <option value="frankreich">Frankreich</option>
    </select><br>
    <label for="newsletter">Newsletter abonnieren:</label>
    <input type="checkbox" id="newsletter" name="newsletter"><br>
    <p>Geschlecht:</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Männlich</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Weiblich</label><br>
    <input type="submit" value="Absenden">
</form>

```

In diesem Beispiel gibt es eine Auswahlliste für die Länderauswahl, eine Checkbox zum Abonnieren des Newsletters und Radiobuttons zur Auswahl des Geschlechts. Beachten Sie, dass alle Radiobuttons den gleichen `name` haben müssen, um eine Gruppe zu bilden, aus der der Benutzer nur eine Option auswählen kann.

**Ausgabe im Browser:**

![Untitled](1%203%207%20Formulare%202d0afe9deb144f23803766f6221911ee/Untitled%201.png)