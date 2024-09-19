#!/bin/bash

# Directory variables
ASSETS_DIR="src/assets"
DIST_DIR="dist/assets"
TIMEOUT=30 # Timeout in seconds

# Function to copy assets
copy_assets() {
    if [ -d "$ASSETS_DIR" ]; then
        echo "Copying assets from $ASSETS_DIR to $DIST_DIR"
        cp -R "$ASSETS_DIR/" "$DIST_DIR/"
        echo "Assets copied successfully."
    else
        echo "No assets directory found. Skipping asset copy."
    fi
}

# Check for assets and handle timeout
start_time=$(date +%s)

while true; do
    if [ -d "$ASSETS_DIR" ]; then
        copy_assets
        break
    fi

    current_time=$(date +%s)
    elapsed_time=$((current_time - start_time))

    if [ "$elapsed_time" -ge "$TIMEOUT" ]; then
        echo "Timeout reached while waiting for assets directory. Exiting."
        break
    fi

    echo "Waiting for assets directory..."
    sleep 1 # Wait before checking again
done
