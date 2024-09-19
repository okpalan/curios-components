#!/bin/bash
# Check for pnpm
if command -v pnpm &> /dev/null
then
    PACKAGE_MANAGER="pnpm"
else
    PACKAGE_MANAGER="npm"
fi
# Run the build command
$PACKAGE_MANAGER run build

# Run the tests
$PACKAGE_MANAGER run test
