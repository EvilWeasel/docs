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

## Docker container usage

This section provides instructions on how to run the application using Docker.

### Prerequisites

- Docker installed on your machine.
- (optional) Docker Compose installed on your machine.

### Using Docker compose

To build the Docker image, navigate to the root directory of the project and run
the following command:

```sh
docker compose build
```

To run the container, use the following command:

```sh
docker compose up -d # start the container as background service
```

Or just use one command for both:

```sh
docker compose up -d --build
```

This will start the container and expose it on port 443. Port is adjustable in
compose-file.

### Using just docker

Building the container:

```sh
docker build -t evil-docs .
```

To run the container without compose, you need to manually pass it some
parameters:

```sh
docker run -d \
  --name evil-docs \
  -p 443:443 \
  -e REPO_URL=https://github.com/EvilWeasel/docs \
  -e LOCAL_DIR=/app \
  -e CHECK_INTERVAL=300 \
  --restart unless-stopped \
  -v $(pwd)/certs:/certs \
  evil-docs
```

### Stopping the Container

To stop the running container using compose, do:

```sh
docker compose down
```

Or with just docker:

```sh
docker stop evil-docs
```

### Cleaning Up

To remove the container (**instance**), use:

```sh
docker rm evil-docs
```

To remove the image, use:

```sh
docker rmi your-app-name
```

### Watchdog Script

The [`watchdog.sh`]("./watchdog.sh") script is used to monitor the application
and ensure it is running correctly. It is copied into the container and executed
as part of the container's startup process.

This script checks if Nginx is running every 60 seconds and starts it if it is
not. It also checks in an adjustable interval of time, if the repository is
updated. If a new Version is detected, is is pulled, a new build is done and the
output copied into nginx's html folder. Nginx will restart automatically.
