const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Helper function to check for PascalCase 
const registerComponents = (inputDir) => {
  const componentDirs = glob.sync('*/', { cwd: inputDir, absolute: true });

  const validComponents = componentDirs.filter((dir) => {
    const componentName = path.basename(dir);

    if (!isPascalCase(componentName)) {
      console.warn(`Skipping component directory "${componentName}" because it is not in PascalCase.`);
      return false;
    }

    const requiredFiles = [
      'index.js',
      `${componentName}.test.jsx`,
      `${componentName}.scss`,
      `${componentName}.html`
    ];

    const allFilesExist = requiredFiles.every((file) =>
      fs.existsSync(path.join(dir, file))
    );

    if (!allFilesExist) {
      console.warn(`Skipping component "${componentName}" due to missing files.`);
      return false;
    }

    return true; // Valid component
  });

  if (validComponents.length === 0) {
    throw new Error(`No valid components found in src directory (${inputDir}).`);
  }

  return validComponents;
};

const isPascalCase = (name) => /^[A-Z][a-zA-Z0-9]*$/.test(name);

// Register components based on required files

module.exports = { registerComponents };
