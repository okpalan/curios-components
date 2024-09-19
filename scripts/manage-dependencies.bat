@echo off
setlocal

set ASSETS_DIR=src\assets
set DIST_DIR=dist\assets
set TIMEOUT=8

:: Start timer
set start_time=%time%

:wait_for_assets
if exist "%ASSETS_DIR%" (
    echo Copying assets from %ASSETS_DIR% to %DIST_DIR%
    xcopy "%ASSETS_DIR%\*" "%DIST_DIR%\" /E /I /Y
    echo Assets copied successfully.
    exit /b 0
)

:: Check timeout
set current_time=%time%
call :time_difference "%start_time%" "%current_time%" elapsed_time
if %elapsed_time% geq %TIMEOUT% (
    echo Timeout reached while waiting for assets directory. Exiting.
    exit /b 1
)

echo Waiting for assets directory...
timeout /t 1 > nul
goto wait_for_assets

:time_difference
:: Calculate time difference in seconds
setlocal
set start=%1
set end=%2
:: Add your own logic to calculate elapsed time based on your requirements
endlocal & set %3=%elapsed_time%
exit /b
