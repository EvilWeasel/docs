---
title: Überwachung und Protokollierung in Linux
description: Eine umfassende Übersicht über Überwachung und Protokollierung in Linux, einschließlich der Verwendung von syslog und auditd zur Überwachung von Systemereignissen und Sicherheitsvorfällen.
sidebar:
  order: 12
---

Überwachung und Protokollierung sind wesentliche Bestandteile der Sicherheitskonzepte in Linux-Betriebssystemen. Dazu gehören, unter anderem, die Verwendung von `syslog` und `auditd` zur Überwachung von Systemereignissen und Sicherheitsvorfällen erklärt.

## syslog

`syslog` ist ein Systemprotokolldienst in Unix-ähnlichen Betriebssystemen, der zur Protokollierung von Systemereignissen und Nachrichten verwendet wird. Es bietet eine Ort für das Logging von Informationen, Warnungen, Fehlern und anderen Ereignissen, die auf einem Linux-System auftreten.

### Syslog lesen

Lesen kann man das Syslog mit dem `journalctl` Tool:

```shell
journalctl
```

### Konfiguration von syslog

Die Konfigurationsdatei für syslog befindet sich in der Regel unter `/etc/syslog.conf` oder `/etc/rsyslog.conf`, je nach der verwendeten syslog-Implementierung. In dieser Datei können verschiedene Logging-Optionen und -Einstellungen festgelegt werden, einschließlich der Definition von Logdateien und der Festlegung von Log-Leveln für unterschiedliche Ereignisse.

### Verwendung von syslog

Um eine Nachricht an das syslog-System zu senden, kann der Befehl `logger` verwendet werden. Zum Beispiel:

```shell
logger "Dies ist eine Testnachricht für syslog."
```

Diese Nachricht wird dann entsprechend den Konfigurationen in der syslog-Konfigurationsdatei protokolliert.

## auditd

`auditd` ist ein Dienst für die Überwachung und Protokollierung von Sicherheitsereignissen auf einem Linux-System. Es ermöglicht die Aufzeichnung von Systemaufrufen, Dateizugriffen, Netzwerkaktivitäten und anderen sicherheitsrelevanten Ereignissen für die spätere Analyse und Auswertung. Unter Ubuntu ist auditd nicht vorinstalliert.

### Konfiguration von auditd

Die Konfigurationsdatei für auditd befindet sich in der Regel unter `/etc/audit/auditd.conf`. Diese Datei enthält Einstellungen wie den Pfad zur Audit-Logdatei, den Speicherplatz für die Logdatei und andere allgemeine Konfigurationsoptionen.

Zusätzlich können Regeln zur Überwachung bestimmter Ereignisse über die Datei `/etc/audit/audit.rules` definiert werden. Diese Regeln legen fest, welche Ereignisse überwacht und protokolliert werden sollen.

### Verwendung von auditd

Um auditd zu starten und zu stoppen oder den Status anzuzeigen, können die Befehle `service auditd start|stop|status` oder `systemctl start|stop|status auditd` verwendet werden, abhängig von der verwendeten Linux-Distribution.

Um Audit-Logs anzuzeigen, kann der Befehl `ausearch` verwendet werden. Zum Beispiel:

```shell
ausearch -m USER_LOGIN
```

Dieser Befehl zeigt alle Logeinträge an, die sich auf Benutzeranmeldungen beziehen.

:::note

Die Verwendung von `syslog` und `auditd` ermöglicht es Administratoren, Sicherheitsvorfälle zu erkennen, zu untersuchen und darauf zu reagieren, um die Integrität und Sicherheit eines Linux-Systems zu gewährleisten.

:::
