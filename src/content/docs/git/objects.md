---
title: Git-Objects
description: Low-Level - Wie funktioniert Git eigentlich? Ist es ein Filesystem-Backup? Ist es eine Datenbank? Es ist... nunja, etwas von beidem.
sidebar:
  order: 4
---

In Git gibt es maßgeblich 3 Arten von Objekten, welche die komplette Funktionalitäten von Git abbilden. Alle anderen Features bauen auf diesen Grundliegenden Ideen auf. Wenn wir diese Puzzleteile verstehen, setzt sich für uns das Gesamtbild und damit ein tiefgehendes Verständnis über die Funktionsweise von Git zusammen.

## Blob

Ein Blob ist der grundlegendste Typ, den wir in Git speichern können, und gleichzeitig der meist Benutzte. Wenn wir eine Datei mit beliebigem Inhalt speichern, speichert Git die Datei als Blob-Objekt. Blob steht hier für **Binary Large Object**. Was das genau bedeutet, kommt später. Fürs Erste musst du nur wissen, dass alle Dateien, die wir mit `git add` zum Staging-Bereich hinzufügen, als diese Blob-Dateien gespeichert werden. Da Git im Grunde genommen nur eine ausgeklügelte Datenbank ist, wird der **SHA-1-Hash** des Dateiheaders als Schlüssel verwendet, um den Inhalt später abzurufen. Außerdem werden die Blobs mit **zlib komprimiert**.

## Tree

Git's Art und Weise Daten abzuspeichern ist der Funktionsweise des Linux-Dateisystems sehr ähnlich. Dateien, welche wir in Git hinzufügen (`git add`), werden als Blob Objekte gespeichert. Diese sind mit den Inodes des Linux-Dateisystems vergleichbar. Auf dem Dateisystem gibt es neben einfachen Dateien aber auch Ordner, wobei dabei die englische Bezeichnung mit "Directories" fast besser passt.

Ein Tree Objekt enthält ein Verzeichnis mit Git-Objekten, also Blobs, und anderen Tree-Objekten. Man könnte Trees in Git mit UNIX-Verzeichniseinträgen vergleichen.

## Commit

Wir haben zum jetzigen Zeitpunkt also zum einen Blobs, welche die Daten die wir sichern möchten darstellen. Auf der anderen Seite haben wir Trees, welche quasi als Index für diese Daten dienen.
Commits sind die Snapshots, welche wir mit Git aufnehmen. Jeder Commit hat mindestens die folgenden Inhalte:

- **Author**
- **Hash**
- **Date**
- **Message**
- (optional) **GPG-Signature**

Das sind die offensichtlichen Inhalte, welche wir eben bekommen, wenn wir `git log` nutzen. Wenn wir aber mit `git cat-file` nachschauen, dann finden wir etwas spannendes.

> Hint!
>  `main` ist hier ein Alias für den letzten Commit. Ein Branch generell ist nur eine Referenz auf einen bestimmten Commit.

```shell
git cat-file -p main # Alias für den letzten Commit, könnte auch "82a3ef" sein
tree 904528c04369241e281d28740eee00a4d927bd71
parent 197e64de60a51692ebf27dafb0c09aa1e513b4d1
author boilerplatesharp <109598903+BoilerplateSharp@users.noreply.github.com> 1710431860 +0100
committer boilerplatesharp <109598903+BoilerplateSharp@users.noreply.github.com> 1710431860 +0100
gpgsig -----BEGIN PGP SIGNATURE-----

 iQIzBAABCAAdFiEEeQSrxOu3KvkFP4gVpP7hyKUQvToFAmXzHnQACgkQpP7hyKUQ
 vTrcoA/9H59UyxOyAtGCb25xW3G2OHHILCFFX6TUlcFBfxGYXwCb6flxjkSG8ukO
 v4cE1p/R8Bi91Yo4nX9lIWLsCwYWWcEwOM4SeAMo0Zt78AP8a/KiuMh1banayryd
 djKKHQnrLjIVzUnlnDHC/JgdNOygvQwcOTdmCF0elaU3hu9PSErjQrqvHmVXeuqR
 2QG+NPEdmWHYK4kWr+MfplA3RWjpQdQ2ihXBAB1Egr0spZIQ8QNiGKceZaX30S0U
 NTE6mLSGDXo6JNCf6POVOHej37jwiGu42/TSlhSvMqsNpuzoIlNmBEikeIwswhLq
 lwnec9sLtRRtXn/oEykRYOTMFaRZTCRsVq6jXzeigxJLA/ielecXKJ0qtW/IqeTl
 KQw9ZpqIw/9smWBisjj0/GxUHGO3stJa04TRw5eWiqYuZPbetyehTd3NnpZNLYaB
 5ryl85QPTWyRqgqc9HP5+B4i9wICxgRig4xIcko1zNTMvLfRvpdsTCh7dzuq2el1
 sxPuPNah6gzWNRiK7TZlUmq04501cZVDQxsGkKG0g6Sw5IRVaY3wq6k6Ff9BYSRZ
 ZTe0lqMORlHyiFA3awNtgjeP9wvsWVHOV+0Ek/vx4U21RE441BDq7zHcDopabOsb
 52qZaF9dKZofeGA3Cr4/0Mjm0rWVYYYveEwaIG3Z5wfTmxUnhrk=
 =m60T
 -----END PGP SIGNATURE-----

added testing assets
```

Hier sehen wir nun neben den üblichen Inhalten auch einen SHA-1 Hash eines Tree-Objekts. Was steckt nun hinter diesem Tree?

```shell
git cat-file -p 904528
100644 blob 8a7cd16511c51b41d899a5e91cee1ba7819b20cf    .gitignore
040000 tree 480a63415677055d620990702964d194022fca91    .obsidian
040000 tree 94901b7556cb713adfdfb5b40b9b6e3c279975fc    assets
040000 tree ca0d87b6bb5de118a27f8277f7a7dff520035a2f    astro
040000 tree c74c9f767c1c42225238dd462b1475256df9a00d    drafts
040000 tree 2d2a9425d97115f9094e003c3c398e10c40920a4    git
100644 blob b3198fd575c8a965b2cb56ec1334f64d547fecda    index.mdx
040000 tree ee38d68a485b563a7a67e160df437789ccb608cc    start
040000 tree bc192767871309123f773ff81a4c035f70bffd27    templates
```

Hier sehen wir nun eine Liste mit Tree- und Blob-Objekten. **Blobs für Dateien** und **Trees für Verzeichnisse**. Wir können zwar antizipieren, aber gehen wir noch eine Ebene tiefer und schauen uns einen Blob an:

```shell
git cat-file -p 8a7cd1
.gitconfig_include
**/node_modules
.trash
```
