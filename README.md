# Evil-Docs &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/2ad1ee45-2d53-41fe-bcb2-aa9907a62dbc/deploy-status)](https://app.netlify.com/sites/evilweasel-docs/deploys)

## Local Development

```shell
git clone git@github.com:EvilWeasel/docs.git evil-docs
cd evil-docs
npm install # Installiert alle Abhängigkeiten
npm run dev # Startet den Dev-Server
```

## 🚀 Projektstruktur

Innerhalb des Projekts findest du die folgenden Ordner und Dateien:

```shell
.
├── astro.config.mjs # Astro Config Datei
├── package.json # Das Manifest des Projekts / "Lieferschein"
├── package-lock.json
├── public # Ordner für statische Dateien
│   └── favicon.svg # z.B. Ein Icon für die Registerkarte
├── README.md # Projektinformationen
├── src # Source-Code der Website
│   ├── components # Wiederverwendbare Komponenten
│   │   └── Card.astro
│   ├── env.d.ts # Definitionen für TypeScript Datentypen
│   ├── layouts # Templates/Vorlagen für die "pages"
│   │   └── Layout.astro # Die Standart-Vorlage
│   └── pages # URL-Mapped Webpages
│       └── index.astro
└── tsconfig.json # TypeScript Projekt-Config

6 directories, 10 files
```

Starlight sucht nach .md oder .mdx Dateien im Verzeichnis src/content/docs/.
Jede Datei wird basierend auf ihrem Dateinamen als Route freigegeben.

Bilder können zu src/assets/ hinzugefügt und in Markdown mit einem relativen
Link eingebettet werden.

Statische Ressourcen, wie Favicons, können im Verzeichnis public/ platziert
werden. 🧞 Befehle

Alle Befehle werden vom Root des Projekts aus in einem Terminal ausgeführt:

| Befehl                    | Aktion                                                        |
| ------------------------- | ------------------------------------------------------------- |
| `npm install`             | Installiert Abhängigkeiten                                    |
| `npm run dev`             | Startet den lokalen Entwicklungsserver unter `localhost:4321` |
| `npm run build`           | Erstellt deine Produktionswebsite in `./dist/`                |
| `npm run preview`         | Vorschau deiner Build lokal vor dem Deployment                |
| `npm run astro ...`       | Führt CLI-Befehle wie `astro add`, `astro check` aus          |
| `npm run astro -- --help` | Hilfe bei der Verwendung des Astro CLI                        |
