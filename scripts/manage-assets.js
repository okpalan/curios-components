@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

echo Starting asset management...

REM Define source and destination directories
SET SOURCE_DIR=src\assets
SET DEST_DIR=dist\assets

REM Check if the source directory exists
IF NOT EXIST "!SOURCE_DIR!" (
    echo ERROR: Source assets directory does not exist. Exiting.
    exit /b 1
)

REM Create the destination directory if it does not exist
IF NOT EXIST "!DEST_DIR!" (
    echo Creating destination assets directory...
    mkdir "!DEST_DIR!"
)

echo Copying assets from !SOURCE_DIR! to !DEST_DIR!...
xcopy "!SOURCE_DIR!\*" "!DEST_DIR!\" /E /I /Y
IF ERRORLEVEL 1 (
    echo ERROR: Failed to copy assets. Exiting.
    exit /b 1
)

echo Assets copied successfully.

REM Optional: Print the copied files
echo Copied files:
dir "!DEST_DIR!"

ENDLOCAL
exit /b 0
