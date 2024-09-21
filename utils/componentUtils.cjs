const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Define required file extensions for components
const requiredExtensions = {
  js: 'index.js',          // Component entry
  test: '*.test.jsx',      // Test file
  scss: '*.scss',          // Styles file
};

// Utility function to check if a name is in PascalCase
const isPascalCase = (name) => /^[A-Z][a-zA-Z0-9]*$/.test(name);

// Function to check for required component files
const registerComponents = (inputDir) => {
  const allComponents = glob.sync('*/', { cwd: inputDir, absolute: true });

  const components = allComponents.filter(dir => {
    const componentName = path.basename(dir);
    
    // Check if directory name is PascalCase
    if (!isPascalCase(componentName)) {
      console.warn(`Skipping component directory "${componentName}" because it is not in PascalCase.`);
      return false;
    }

    // Check for required file types
    const hasRequiredFiles = Object.entries(requiredExtensions).every(([key, pattern]) => {
      const files = glob.sync(pattern, { cwd: dir, absolute: true });
      const hasValidFiles = files.length > 0 && files.every(file => isPascalCase(path.basename(file, path.extname(file))));

      if (!hasValidFiles) {
        console.warn(`Skipping component "${componentName}" due to missing or invalid ${key} file(s).`);
      }

      return hasValidFiles;
    });

    // Check for template file specifically named after the component
    const templateFilePath = path.join(dir, `${componentName}.html`);
    const hasTemplateFile = fs.existsSync(templateFilePath);

    if (!hasTemplateFile) {
      console.warn(`Skipping component "${componentName}" due to missing template file "${componentName}.html".`);
      return false;
    }

    return hasRequiredFiles; // Only return components with all required files and valid naming
  });

  if (components.length === 0) {
    throw new Error(`No valid components found in src directory (${inputDir}). Ensure each component has the required files.`);
  }

  return components;
};

module.exports = {
  registerComponents,
  isPascalCase,
};
