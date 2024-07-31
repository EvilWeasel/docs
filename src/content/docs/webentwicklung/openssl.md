---
title: Wie man eine SSL-Zertifikatsauthorität wird
description: Alles wichtige zum Erstellen von SSL-Zertifikaten, zum entwickeln von Web-Apps mit https.
---

Um ein SSL-Zertifikat von einer CA wie Verisign oder GoDaddy anzufordern, sendest du ihnen eine Certificate Signing Request (CSR), und sie geben dir im Gegenzug ein SSL-Zertifikat, das sie mit ihrem Root-Zertifikat und dem privaten Schlüssel signiert haben. Alle Browser haben eine Kopie (oder Zugriff auf eine Kopie vom Betriebssystem) des Root-Zertifikats von verschiedenen CAs. Dadurch kann der Browser überprüfen, dass dein Zertifikat von einer vertrauenswürdigen CA signiert wurde.

Deshalb vertraut der Browser einem selbst signierten Zertifikat nicht. Es wurde nicht von einer CA signiert. Die Lösung besteht darin, unser eigenes Root-Zertifikat und privaten Schlüssel zu generieren. Wir fügen dann das Root-Zertifikat einmalig zu allen unseren Geräten hinzu.
Anschließend werden alle selbst signierten Zertifikate, die wir generieren, als vertrauenswürdig betrachtet. 

## Eine Zertifizierungsstelle werden

Es ist relativ einfach, die Dateien zu generieren, welche benötigt werden, um eine Zertifizierungsstelle zu werden. Die Befehle dafür sind jedoch recht lang und komplex.

Schauen wir uns an, wie das auf macOS und Linux funktioniert. Unter Windows muss man etwas anders vorgehen. Da macOS und Linux beide Unix-ähnliche Betriebssysteme sind, sind die Prozesse zur Generierung der erforderlichen Dateien sehr ähnlich.

Der einzige wirkliche Unterschied zwischen beiden besteht darin, dass du auf macOS möglicherweise das OpenSSL-CLI installieren musst. Prüfe dafür zuerst, ob `openssl` nicht bereits installiert ist.

```shell
openssl
```

Falls wir hier eine Fehlermeldung wie `zsh: command not found: openssl` bekommen, müssen wir `openssl` noch installieren. Falls sich eine OpenSSL-Shell öffnet die ungefähr so aussieht `OpenSSL>`, einfach mit **STRG+D** beenden und die Installation überspringen.

### OpenSSL Installation

Auf Linux lässt sich `OpenSSL` ganz einfach über den systemeigenen Packetmanager installieren. Auf MacOS nutzt man dafür am Besten Homebrew.
Wenn du Homebrew nicht bereits hast, installiere es wie folgt.

**Homebrew installieren**
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
```

Nach der Installation von `brew`, können wir noch das `openssl` Packet installieren.

**`openssl` installieren**
```shell
brew install openssl
```

### Ordner für Zertifikate

Bevor wir die Zertifikate erstellen, können wir noch einen Ort erstellen, um unsere lokalen Zertifikatsdateien zu speichern. Das ist keine Pflicht, macht es aber wesentlich einfacher, die Schlüssel später zu finden.

```shell
mkdir ~/certs
cd ~/certs
```

### Zertifikate generieren

Als erstes generieren wir den private-key für unsere RootCA. Als Konvention nutzen wir im Folgenden als Dateiendungen für **private Schlüssel `.key`** und für **öffentliche Schlüssel bzw. Zertifikate `.crt`**.

```shell 
openssl genrsa -des3 -out myCA.key 4096
```

OpenSSL wird nach einer Passphrase fragen, die wir sicher aufzubewahren. Die Passphrase verhindert, dass jemand, der deinen privaten Schlüssel bekommt, sein eigenes Root-Zertifikat generieren kann. Die Ausgabe sollte so aussehen:

```plaintext
Generating RSA private key, 4096 bit long modulus 
.................................................................+++ .....................................+++
e is 65537 (0x10001)
Enter pass phrase for myCA.key:
Verifying - Enter pass phrase for myCA.key:
```

Als nächstes generieren wir das Root-Zertifikat (Public-Key):

```shell
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.crt
```

Du wirst nach der Passphrase des privaten Schlüssels gefragt. Danach kommen einigen Fragen. Die Antworten auf diese Fragen sind nicht so wichtig. Sie erscheinen, wenn du dir das Zertifikat im Detail ansiehst.

Der **Common Name** sollte leicht zu identifizieren sein, so dass du ihn in einer Liste von Zertifikaten als dein Root-Zertifikat erkennen würdest.

```text
Enter pass phrase for myCA.key:
You are about to be asked to enter information that will be incorporated into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
----- Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]: Springfield State
Locality Name (eg, city) []:Springfield
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Hellfish Media
Organizational Unit Name (eg, section) []:7G
Common Name (e.g. server FQDN or YOUR name) []:Hellfish Media
Email Address []:[email protected]
```

Jetzt solltest du zwei Dateien haben: `myCA.key` (dein privater Schlüssel) und `myCA.crt` (dein Root-Zertifikat).

🎉 Herzlichen Glückwunsch, du bist jetzt eine CA. Irgendwie.

Bewahre den privaten Schlüssel gut auf und gebe diesen auch niemals weiter. 

## Hinzufügen des Root-Zertifikats auf allen Geräten

### MacOS

```shell
sudo security add-trusted-cert -d -r trustRoot -k "/Library/Keychains/System.keychain" myCA.crt # Nur das Root-Zertifikat muss hinzugefügt werden, NICHT der private-key!
```

### Linux

Benötigt das Paket `ca-certificates`.

Kopiere das `myCA.crt` Root-Zertifikat **(nicht den private-key!)** nach `/usr/local/share/ca-certificates` und führe folgenden Befehl aus:

```shell
sudo cp ~/certs/myCA.crt /usr/local/share/ca-certificates/myCA.crt
```

Update danach noch den Certificate-Store, damit die Änderungen übernommen werden:

```shell
sudo update-ca-certificates
```

### Windows

Es ist wie immer mit Microsoft. Alles, was unter Unix Standard ist, muss bei Windows unnötig komplex sein...

Da wir jedoch unsere Zertifikate auch unter Windows verwenden wollen, ist der einfachste Weg es einfach anzuklicken. So erkennt Windows es automatisch als installierbares Zertifikat an und fügt es automatisch in den Trust-Store hinzu. **Das funktioniert allerdings nur, wenn die Dateiendung `.crt` ist.**

## Mit unserer CA Zertifikate signieren

Herzlichen Glückwunsch! Du hast erfolgreich deine eigene Zertifizierungsstelle (CA) eingerichtet. Jetzt ist es an der Zeit, diese Macht zu nutzen und Zertifikate für deine Web-Apps zu signieren.

### Zertifikate signieren

Um ein Zertifikat zu signieren, muss unsere CA eine sogenannte *Certificate Signing Request (CSR)* erhalten. Das ist im Grunde eine Anfrage von jemandem, der ein Zertifikat von unserer CA haben möchte. Hier ist, wie du das machst:

#### Generiere einen privaten Schlüssel für die Web-App:

```shell
openssl genrsa -out myapp.key 4096
```

Du kannst diesen Schlüssel als `myapp.key` speichern oder einen anderen Namen deiner Wahl verwenden.

#### Erstelle einen CSR mit dem privaten Schlüssel:

```shell
openssl req -new -key myapp.key -out myapp.csr
```

Du wirst nach einigen Informationen gefragt, einschließlich des Common Name. Dies sollte der vollständig qualifizierte Domainname (FQDN) deiner Web-App sein.

Sende die CSR an deine CA (also dich selbst):

Dies ist der Punkt, an dem eine CA unseren Signing-Request unterzeichnen muss. In unserem Fall kannst du die CSR einfach selbst signieren.

#### Signiere die CSR mit deiner CA:

```shell
openssl x509 -req -in myapp.csr -CA myCA.crt -CAkey myCA.key -CAcreateserial -out myapp.crt -days 365 -sha256
```

Hier verwenden wir das Root-Zertifikat und den privaten Schlüssel der CA, um die CSR zu signieren und ein Zertifikat für die Web-App zu generieren. Das Zertifikat ist für 365 Tage gültig.

Deine signierten Zertifikate sind bereit:

Jetzt solltest du die Dateien `myapp.key` (privater Schlüssel deiner Web-App) und `myapp.crt` (signiertes Zertifikat) haben. Diese können nun von deiner Web-App genutzt werden.

## Fazit

Herzlichen Glückwunsch! Du hast nicht nur erfolgreich deine eigene Zertifizierungsstelle erstellt, sondern auch gelernt, wie man Zertifikate für Web-Apps signiert. Dieses Wissen sollte dir dabei helfen, sichere und verschlüsselte Verbindungen für deine Projekte zu gewährleisten.

Denk daran, diese Macht mit Bedacht zu nutzen, und viel Erfolg bei der Umsetzung sicherer Web-Anwendungen. 