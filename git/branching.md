# Notes on branching

Branches are created by using the command: git branch <branch_name>
New branches are attended to using the command: git checkout <branch_name>

# Shortcut for creating a branch + switching to it

git checkout -b <branch_name>

# Checking for available branches

git branch.

# Returning back to the main branch

git checkout main.

# What to do when done with the  feature on the experimental branch

If you wish to add the feature in the the main branch, you will do what is called **merge**.

# Merging

command: git merge <branch_name>

**important to note**
it takes the code you commited in the  <branch_name> and adds it to the branch that you are on currently

# Deleting a branch

If you no longer need a branch, you delete with: 

git branch -d <branch_name> **if branch has already been merged**

git branch -D <branch_name> **if branch has not been merged**

# Note on deleting a branch 

**delete branches when you are done, to avoid them stacking up and interfering with workflow**