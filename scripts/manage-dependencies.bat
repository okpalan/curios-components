@echo off
setlocal

echo Starting asset management...

rem Define source and destination directories
set "SOURCE_DIR=src\assets"
set "DEST_DIR=dist\assets"

rem Check if the source directory exists
if not exist "%SOURCE_DIR%" (
    echo ERROR: Source assets directory does not exist. Exiting.
    exit /b 1
)

rem Create the destination directory if it does not exist
if not exist "%DEST_DIR%" (
    echo Creating destination assets directory...
    mkdir "%DEST_DIR%"
)

echo Copying assets from %SOURCE_DIR% to %DEST_DIR%...
xcopy "%SOURCE_DIR%\*" "%DEST_DIR%\" /E /I /Y
if errorlevel 1 (
    echo ERROR: Failed to copy assets. Exiting.
    exit /b 1
)

echo Assets copied successfully.

rem Optional: Print the copied files
echo Copied files:
dir "%DEST_DIR%"

exit /b 0
