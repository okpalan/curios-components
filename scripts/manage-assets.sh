#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Starting asset management..."

# Define source and destination directories
SOURCE_DIR="src/assets"
DEST_DIR="dist/assets"

# Check if the source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "ERROR: Source assets directory does not exist. Exiting."
    exit 1
fi

# Create the destination directory if it does not exist
if [ ! -d "$DEST_DIR" ]; then
    echo "Creating destination assets directory..."
    mkdir -p "$DEST_DIR"
fi

echo "Copying assets from $SOURCE_DIR to $DEST_DIR..."
cp -R "$SOURCE_DIR/"* "$DEST_DIR/"
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to copy assets. Exiting."
    exit 1
fi

echo "Assets copied successfully."

# Optional: Print the copied files
echo "Copied files:"
ls "$DEST_DIR"

exit 0
