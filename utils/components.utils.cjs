const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Helper function to check for PascalCase
const isPascalCase = (name) => /^[A-Z][a-zA-Z0-9]*$/.test(name);

// Register components based on required files
const registerComponents = (inputDir) => {
  // Get all component directories
  const componentDirs = glob.sync('*/', { cwd: inputDir, absolute: true });

  // Filter valid component directories
  const validComponents = componentDirs.filter((dir) => {
    const componentName = path.basename(dir);

    // Check if the component name is in PascalCase
    if (!isPascalCase(componentName)) {
      console.warn(`Skipping component directory "${componentName}" because it is not in PascalCase.`);
      return false;
    }

    // Define required files for each component
    const requiredFiles = [
      'index.js',
      `${componentName}.test.jsx`,
      `${componentName}.scss`,
      `${componentName}.html`,
    ];

    // Check if all required files exist
    const allFilesExist = requiredFiles.every((file) =>
      fs.existsSync(path.join(dir, file))
    );

    if (!allFilesExist) {
      console.warn(`Skipping component "${componentName}" due to missing files: ${requiredFiles.filter(file => !fs.existsSync(path.join(dir, file))).join(', ')}`);
      return false;
    }

    return true; // Valid component
  });

  // Throw an error if no valid components are found
  if (validComponents.length === 0) {
    throw new Error(`No valid components found in src directory (${inputDir}). Ensure that components are in PascalCase and have all required files.`);
  }

  return validComponents;
};

module.exports = { registerComponents };
