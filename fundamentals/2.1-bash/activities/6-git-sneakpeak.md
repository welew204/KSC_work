This is a bonus activity that is a "preview" of the first activity in the next
lesson! Only attempt this activity if you have extra time.


Git Practice Challenge
----------------------------

1. Using Bash or zsh, create a directory to house your new git repo (remember,
no spaces or unusual characters). For example:


    mkdir my_testing_git_repo

2. Use "git init" to prepare the new directory:


    cd my_testing_git_repo
    git init

3. Confirm there is a ".git" directory now that was just created:


    ls -a

4. Using your text editor, create a new file called index.html with some
text, such as "Hello world". Save it in your new repo directory.

5. Use "git add" to include the index.html file in the Git repo:


    git add -A

6. Use "git commit"  to create a new commit to save your file. Commits "freeze"
the changes you made, saving them into the "undo history" of git (called the
"commit history"):


    git commit -m 'adding cool stuff'

NOTE: If you get an error about not being configured, see the hint at the
bottom of this file.

7. Use "git log" to see the history of changes you've made (so far
should be just 1 commit)


    git log

8. Use "git diff" to compare the current version with a previous
version. You'll need to use the hash number that you got from git log.


    git diff d6080dea8406c616eb355837b4e1f26852ea4b20

9. In your text editor, make a change to your local index.html file,
such as change it to "Hello Git World!"

10. Repeat steps 5-8 to commit and check your changes



HINTS
----------------------------

Got an error about git not being configured? Configure with the following git
commands:


    git config --global user.name "Jane Hacker"
    git config --global user.email "janehacker@gmail.com"

Except replace Jane Hacker with your name, and janehacker@gmail.com with your
email address. You should use the same email you used for your GitHub account
(if you have one).

You only need to do it once, and if you make a mistake, just run those commands
again to re-configure as needed with your name and email.


BONUS CHALLENGE 1
----------------------------

1. Make another change to the index.html file

2. Use "git status" to check the status of your directory

3. Repeat steps 5-8 again, only trying out the "git status" command
between every other command to see how the status of the file changes


BONUS CHALLENGE 2
----------------------------

1. Research how to use "git checkout" to go "back in time" to a previous
version.

2. Use it to "check out" a previous version of your git repo.

