FROM node:lts

WORKDIR /app

# Copy SSL certificates (should be replaced with your own using a volume-binding)
COPY ./.devCerts/localhost-key.pem /certs/cert-key.pem
COPY ./.devCerts/localhost.pem /certs/cert.pem

# Install necessary packages using apt
RUN apt-get update && apt-get install -y \
  git \
  nginx \
  openssl \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Copy nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Clean up the default nginx site
RUN rm -rf /usr/share/nginx/html

# Create a symlink from /app/dist (astro build output) to /usr/share/nginx/html (publish-folder)
RUN ln -s /app/dist /usr/share/nginx/html

# Copy Watchdog script
COPY ./watchdog.sh /usr/local/bin/watchdog.sh
RUN chmod +x /usr/local/bin/watchdog.sh

# Expose port 443
EXPOSE 443

# Start the watchdog script and nginx
CMD ["sh", "-c", "/usr/local/bin/watchdog.sh & nginx -g 'daemon off;'"]
