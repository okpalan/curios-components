## Hey Auto-Dev,

- Please press CTRL+SHIFT+V on keyboard:
- Click ![HERE](./docs/SHORTCUTS.md) for all the SHORTCUTS.


Thanks for jumping in to help with the project! Since you're new, I’ve written out some detailed steps to guide you through the tasks ahead. Let’s tackle them one by one, starting from the easier ones, then moving on to the more complex tasks.


### Step 1: Fix the Rollup Configuration

The first thing we need to do is make sure the `rollup.config.js` file is set up correctly. It’s important that the file exports an array of configuration options, and right now it looks like there might be an issue with that. Here’s what to do:

- **First**, open the `rollup.config.js` file and make sure that it's not empty. We need to ensure it exports either an options object or an array of options objects. 
- **Next**, check that all components are being properly imported from the `src` directory. If any components are missing or misconfigured, it can cause the build process to fail.
- **Finally**, to make sure everything’s working, run the build command:
  ```bash
  npm run build
  ```
  If the build succeeds, you’ve nailed this task! If not, we can troubleshoot together.

### Step 2: Add New Components

Now that we have the Rollup config fixed, we can move on to adding more components. Here’s how you can approach this:

- **First**, head over to the `docs/` directory and check out any files that document potential components we can add. Let’s focus on the components that make the most sense for our codebase right now.
- **Next**, implement the selected components by placing them into the `src/` directory. Make sure they integrate smoothly with the existing components.
- **Once done**, we’ll need to write tests for each new component. Testing will ensure everything works as expected and prevent future bugs.

### Step 3: Document the `NoisyNotification` Component

Once you’ve added some components, the next big task is to write documentation for the `NoisyNotification` component. Here’s how to approach that:

- **Create** a new markdown file in the `fixtures` directory. You can call it something like `noisy-notification.md`.
- **Start** the documentation with an overview of the component:
  - What does it do?
  - How does it work?
- **Next**, document how to install and import it. Include any commands or steps needed to get it running in a project.
- **Provide** some code examples to show how it’s used, from a basic example to something a bit more complex.
- **Finally**, document the props and their types, and explain how users can test the component to ensure it works properly.

This documentation is super important because it helps others (and even future you!) understand how to use this component without having to dig through the code.

### Step 4: Testing Time

Testing is essential to make sure the components and changes we’ve made are solid. Here’s what we need to do:

- **Write tests** for the `NoisyNotification` component and any other new components you’ve added.
- **Ensure** that the tests cover basic functionality as well as edge cases. It’s better to catch any weird behavior now than deal with bugs later!
- Once the tests are written, **run them** to make sure everything is working correctly. If something breaks, don’t worry! We’ll fix it together.

---

### Final Thoughts

By following these steps, you’ll move from smaller, more manageable tasks to bigger challenges. If you run into any issues, don’t hesitate to ask for help! We’re in this together, and I’m always here to guide you through any roadblocks. Once you’re comfortable, you’ll be flying through tasks like a pro!


Looking forward to seeing the awesome work you’ll do!
Cheers,  
Nnamdi Michael Okpala