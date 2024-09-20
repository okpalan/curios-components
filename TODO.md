### TODO List

1. **Fix Rollup Configuration:**
   - [ ] Ensure the `rollup.config.js` is exporting an array of configurations correctly.
   - [ ] Verify that all components are properly loaded from the `src` directory.
   - [ ] Test the build process by running `npm run build`.

2. **Add Additional Components:**
   - [ ] Review files in the `docs/` directory for potential components to add to the codebase.
   - [ ] Implement additional components based on the documentation.
   - [ ] Write tests for the new components to ensure functionality.

3. **Document `NoisyNotification` Usage:**
   - [ ] Write comprehensive documentation for the `NoisyNotification` component in the `fixtures` directory.
     - **Structure the documentation:**
       - Overview: What the component does.
       - Installation: How to install and import it.
       - Usage: Provide example code snippets.
       - Props: Document the props and their types.
       - Tests: Describe how to run tests for this component.

### Suggested Steps for Coworker.

1. **Fixing Rollup Configuration:**
   - Make sure the `rollup.config.js` file correctly exports configurations and is not empty. 
   - Test the configuration by running:
     ```bash
     npm run build
     ```

2. **Adding New Components:**
   - Navigate to the `docs/` directory and identify components to add.
   - For each new component:
     - Implement the component in the `src/` directory.
     - Ensure it integrates well with existing components.

3. **Documenting `NoisyNotification`:**
   - Create a new Markdown file in the `fixtures` directory, e.g., `noisy-notification.md`.
   - Fill in the sections as outlined above.
   - Include examples that range from simple to complex use cases to cater to varying skill levels.

4. **Testing:**
   - Write tests for the `NoisyNotification` component as well as any new components added.
   - Ensure tests cover basic functionality and edge cases.
   - Run tests to verify everything works correctly.
