#!/bin/sh
echo "Watchdog starting..."

# Configuration from environment variables
REPO_URL=${REPO_URL:-"https://github.com/EvilWeasel/docs"}
LOCAL_DIR=${LOCAL_DIR:-"/app"}
CHECK_INTERVAL=${CHECK_INTERVAL:-300}

cd $LOCAL_DIR

echo "Watchdog running in $LOCAL_DIR"
echo "Checking for changes in $REPO_URL every $CHECK_INTERVAL seconds..."

# Start watching for changes
while true; do

  # Clone the repository if it doesn't exist
  if [ ! -d ".git" ]; then
    echo "Repository not found. Cloning..."
    git clone $REPO_URL .
    echo "First time setup. Running npm install..."
    npm install
    echo "Running npm build..."
    npm run build
    echo "Build done. Copying files to nginx directory..."
    cp -r $LOCAL_DIR/dist/* /usr/share/nginx/html
    echo "Reloading nginx..."
    nginx -s reload
    echo "Initial setup complete. Watching for changes..."
  fi


  git fetch origin main

  # Check if there are new commits
  LOCAL_COMMIT=$(git rev-parse HEAD)
  REMOTE_COMMIT=$(git rev-parse origin/main)

  if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
    echo "New changes detected. Pulling changes and rebuilding..."
    git pull origin main

    # Install dependencies and rebuild the project
    echo "Running npm install..."
    npm install
    echo "Running npm build..."
    npm run build

    # Restart nginx (optional if configuration needs reload)
    echo "Reloading nginx..."
    nginx -s reload
  else
    echo "No changes detected. Going back to sleep..."
  fi

  # Wait for the next check
  echo "Sleeping for $CHECK_INTERVAL seconds..."
  sleep $CHECK_INTERVAL
done
