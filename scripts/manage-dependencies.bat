@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM Check for pnpm
WHERE pnpm >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    SET PACKAGE_MANAGER=pnpm
) ELSE (
    SET PACKAGE_MANAGER=npm
)

REM Run the build command
%PACKAGE_MANAGER% run build

REM Run the tests
%PACKAGE_MANAGER% run test
