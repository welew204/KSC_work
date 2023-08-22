Git Branching Practice Challenge
----------------------------

- Note: The names "main" and "master" are both used as the name of default
  branch, and refer to the same thing ("main" is the more modern of the two)


1. Either go back to the git repo you did from the previous git activity, OR
start a new one (use instructions from `1_git_practice.md`)

2. Use "git branch" to create a new branch called "my-test-branch":

    git branch my-test-branch

2. Use "git status" to double check you are on "main" branch

    git status

3. Use "git checkout" to switch to your newly created branch:

    git checkout my-test-branch

4. Use "git status" to confirm you are on your newly created branch

    git status

5. Use your text editor to make some changes to your index.html file in the
repo, such as adding a new line of text.

6. Use "git add -A" and "git commit", as before, to create a commit with the
change you did (this is to "freeze" the change in time)

    git add -A
    git commit -m 'Making some changes...'

7. Use "git log" to see the history of changes you've made on this
branch

    git log

8. The name of the default branch is "main". Practice switching to main,
then switching back, to observe the difference:

    git checkout main
    git status
    git log
    git checkout my-test-branch
    git status
    git log

9. Now we will merge this branch into main. This means we will bring over the
extra work in my-test-branch over to main:

    git checkout main
    git log
    git merge my-test-branch
    git log

# DONE
------------


BONUS CHALLENGE 1:
------------------------

- If you have more time, repeat steps 3-9 to practice another change, and
  making another merge.


BONUS CHALLENGE 2:
------------------------
# DONE

- Simulate & resolve a merge conflict. This can be done by making two commits:
  One on main, and one on my-test-branch, which do conflicting things (e.g.
  change the same line).

- Once you've made these two commits, then do a git merge (as before) to create
  the "merge conflict".

- Research how to resolve the merge conflict. This will involve manually edit
  the index.html to remove the ">>>>>" and "<<<<<" and "=====" indicators that
  git added, until it is how you want it to be, then using "git add" and "git
  commit" to continue.
    - Hint: These ">>>>>" text indicators are just that, text. It's just text
      that was added to the file. On some editors such as VS Code it attempts
      to be "clever" and show these as though they were different branching
      parts of code. This might be helpful to resolve the conflict, but it also
      can be confusing for new git users. We recommend to VS Code users to at
      least looking at the file using a simpler text editor, such as Sublime,
      your OS's built-in text editor, or even just cat so you can see what is
      "actually" inside the file.
