# Testing Documentation for Draft Components

## Overview

This document outlines the usage of GitLab CI/CD for the `draft-components` project. It explains how to configure testing in the CI/CD pipeline and provides instructions for running tests locally and in the GitLab environment.

## GitLab CI/CD Configuration

The `.gitlab-ci.yml` file defines the CI/CD pipeline for the `draft-components` project. Below is a breakdown of the key stages and jobs:

### `.gitlab-ci.yml`

```yaml
image: node:16  # Use the Node.js version that fits your project

stages:
  - install
  - test
  - build

install:
  stage: install
  script:
    - npm install

lint:
  stage: test
  script:
    - npm run lint
  dependencies:
    - install

test:
  stage: test
  script:
    - npm run test
  dependencies:
    - install

build:
  stage: build
  script:
    - npm run build
    - npm run build:types
  artifacts:
    paths:
      - dist/
```

### Key Components

1. **Image**: Specifies the Docker image to use for the CI environment. Here, we are using Node.js version 16.

2. **Stages**: Defines the stages in the CI/CD pipeline:
   - `install`: Installs project dependencies.
   - `test`: Runs linting and tests.
   - `build`: Builds the project and generates type definitions.

3. **Jobs**:
   - **install**: Installs dependencies using `npm install`.
   - **lint**: Runs the linting process with `npm run lint` and is dependent on the `install` job.
   - **test**: Executes tests with `npm run test` and is also dependent on the `install` job.
   - **build**: Builds the project and types, storing the output in the `dist/` directory as artifacts.

### Running Tests Locally

To run tests locally, ensure you have Node.js and npm installed. Follow these steps:

1. Clone the repository:
   ```bash
   git clone https://gitlab.com/gufn/draft-components.git
   cd draft-components
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run linting:
   ```bash
   npm run lint
   ```

4. Run tests:
   ```bash
   npm run test
   ```

### Viewing Test Results in GitLab

Once you push changes to the GitLab repository, the CI/CD pipeline will automatically run:

1. Navigate to your GitLab project.
2. Go to **CI/CD** > **Pipelines** to view the status of your pipeline runs.
3. Click on a pipeline to see the details and logs for each job.

### Accessing Artifacts

After the `build` job runs, the `dist/` directory is saved as an artifact:

1. Click on the completed build job in the pipeline view.
2. Find the "Download" button for artifacts to access the built files.

## Conclusion

This document serves as a guide to setting up and using GitLab CI/CD for the `draft-components` project. By following the provided instructions, you can efficiently manage testing and building processes within the GitLab environment.

For any further questions or issues, please refer to the [GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/) or contact the project maintainers.

--- 

Feel free to modify any sections to better fit your project's specific needs!