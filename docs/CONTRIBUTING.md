# Contributing to Draft Components

Thank you for considering contributing to **Draft Components**! We appreciate your time and effort in helping improve this project.

The following is a set of guidelines for contributing, including how to fork the repository, make changes, and submit pull requests. Please make sure to follow these guidelines for a smooth collaboration.

## Repository URL

This project is hosted on GitLab:  
**[https://gitlab.com/gufn/onboarding/draft-components](https://gitlab.com/gufn/onboarding/draft-components)**

## Getting Started

### 1. Fork the Repository

To start contributing, fork the repository from the main project to your GitLab account:

1. Navigate to the repository: [https://gitlab.com/gufn/onboarding/draft-components](https://gitlab.com/gufn/onboarding/draft-components)
2. Click the "Fork" button in the top-right corner.
3. This will create a copy of the project under your GitLab account.

### 2. Clone Your Fork

After forking, clone your fork locally using the following command:

```bash
git clone https://gitlab.com/your-username/draft-components.git
```

Replace `your-username` with your GitLab username.

### 3. Set Up the Upstream Remote

Add the original repository as the upstream remote to keep your fork in sync with the main project:

```bash
cd draft-components
git remote add upstream https://gitlab.com/gufn/onboarding/draft-components.git
```

Now you have two remotes:

- `origin`: points to your fork
- `upstream`: points to the main repository

### 4. Syncing Your Fork

Before starting to work on a new feature or fix, always ensure that your fork is up-to-date with the latest changes from the main repository. Fetch and merge changes from the upstream repository:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

This will pull in the latest changes from the main repository and merge them into your local branch.

## Creating a Branch

Create a new branch for each feature or fix. Use a descriptive branch name to indicate what you are working on:

```bash
git checkout -b feature/my-new-component
```

Replace `my-new-component` with a short description of the feature you are working on.

## Making Changes

1. Make sure your changes are consistent with the existing codebase.
2. Write meaningful commit messages to describe what changes you made.
3. Run tests to verify that your changes do not break any existing functionality.

## Committing Your Changes

Once you have made your changes, add and commit them:

```bash
git add .
git commit -m "Add new component: MyComponent"
```

Ensure your commit message is concise and descriptive.

## Pushing Your Changes

After committing your changes, push your branch to your forked repository:

```bash
git push origin feature/my-new-component
```

## Submitting a Merge Request

Once your feature branch is ready and pushed to your fork, create a Merge Request (MR) to the main repository.

1. Go to the repository page: [https://gitlab.com/gufn/onboarding/draft-components](https://gitlab.com/gufn/onboarding/draft-components)
2. Click on "Merge Requests" on the left sidebar.
3. Click the "New Merge Request" button.
4. Select your fork and branch as the source, and the main repository and `main` branch as the target.
5. Provide a clear and descriptive title for your Merge Request and add any relevant details in the description.
6. Submit the Merge Request for review.

## Reviewing and Feedback

Your Merge Request will be reviewed by the project maintainers. If any changes are requested, update your branch accordingly and push the changes:

```bash
git push origin feature/my-new-component
```

The Merge Request will automatically update with your changes.

Once approved, your changes will be merged into the main repository!

## Additional Guidelines

- **Write Tests:** Ensure that you write tests for any new components or features you add. This helps maintain the integrity of the project.
- **Stay Consistent:** Follow the coding style and patterns already present in the project.
- **Be Clear:** When creating a Merge Request, be as detailed as possible to help reviewers understand the context of your changes.

## Conclusionho
Thank you for contributing to Draft Components! We appreciate your time and effort, and we look forward to working with you.

