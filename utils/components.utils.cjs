const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Check if a string is in PascalCase
const isPascalCase = (name) => /^[A-Z][a-zA-Z0-9]*$/.test(name);
const registerComponents = (inputDir) => {
  const componentDirs = glob.sync('*/', { cwd: inputDir, absolute: true }); // Fetch directories, not files

  const validComponents = componentDirs.filter((dir) => {
    const componentName = path.basename(dir);

    if (!isPascalCase(componentName)) {
      console.warn(`Skipping component directory "${componentName}" because it is not in PascalCase.`);
      return false;
    }

    // Ensure required files exist in the component directory
    const requiredFiles = [
      path.join(dir, 'index.js'),  // Reference specific files in directory
      path.join(dir, `${componentName}.test.jsx`),
      path.join(dir, `${componentName}.scss`),
      path.join(dir, `${componentName}.html`)
    ];

    const allFilesExist = requiredFiles.every((file) =>
      fs.existsSync(file)
    );

    if (!allFilesExist) {
      console.warn(`Skipping component "${componentName}" due to missing files.`);
      return false;
    }

    return true; // Valid component directory
  });

  if (validComponents.length === 0) {
    throw new Error(`No valid components found in src directory (${inputDir}).`);
  }

  return validComponents;  // Return the valid component directories
};


// Register components based on required files
module.exports = { registerComponents };
