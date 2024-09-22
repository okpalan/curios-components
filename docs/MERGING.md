To merge the changes from the `features/fix-rollup-config` branch into the `main` branch using Git, you can follow these steps:

1. **Switch to the main branch** (you've already done this):
   ```bash
   git checkout main
   ```

2. **Pull the latest changes from the remote main branch** (to ensure your local main is up-to-date):
   ```bash
   git pull origin main
   ```

3. **Merge the feature branch into the main branch**:
   ```bash
   git merge features/features-name
   ```

4. **Resolve any merge conflicts** (if there are any). If conflicts arise, Git will indicate which files are in conflict. Open those files, resolve the conflicts, and then stage the changes:
   ```bash
   git add <file_with_conflicts>
   ```

5. **Commit the merge** (if there were conflicts):
   ```bash
   git commit -m "Merged features/fix-rollup-config into main"
   ```

6. **Push the updated main branch back to the remote repository**:
   ```bash
   git push origin main
   ```

That's it! Your changes from `features/feature-name` will now be merged into the `main` branch. If you have any questions or need further assistance, feel free to ask!

