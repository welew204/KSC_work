Up until now, we have been doing Git in a way that you will not likely do "in
real life". In real life, we will be wanting to share your code with others, so
that you can collaborate with your teammates.

Going forward, you will *always* start your new Git repos by going to GitHub
and creating the repo there, then using "clone" to get it down to your
computer. Local-only repos are not very useful in this class or common in the
industry.


GitHub challenge
----------------------------


1. In your web-browser, make a new repo on GitHub (go to <http://github.com>).
Be sure to check "Initialize with README.md" as you create it.

2. In your terminal, type "git clone" and paste in the URL of your GitHub repo
to download the repo somewhere. The syntax is as follows, but you'll need to
replace YOUR-USERNAME and YOUR-REPO-NAME with what actually is for GitHub:

    git clone http://github.com/YOUR-USERNAME/YOUR-REPO-NAME

3. Navigate into the repo you downloaded (again, replacing YOUR-REPO-NAME):

    cd YOUR-REPO-NAME

4. Use "git remote -v" to verify the remote GitHub repo is associated:

    git remote -v

5. Using your text editor, create a new file called index.html with some text,
such as "Hello world". Save it in your new repo directory.

6. Use "git add -A" to include the index.html file in the Git repo

    git add -A

7. Use "git commit" to create a new commit:

    git commit -m 'My first commit going to GitHub'

8. Use "git log" to see the history of changes you've made (so far should be
just 2 commits)

    git log

9. Use "git push" to push your changes up to GitHub

10. In your browser, go to GitHub and confirm the index.html file is uploaded
to your repo

11. In your browser, click on the "Commits" tab in GitHub, to confirm your
commit message is appearing.

# DONE
------------


BONUS CHALLENGE 1:
------------------------

- If you have more time, repeat steps 5-10 to practice making more changes and
  pushing them up to GitHub. This will be your "normal work flow".


BONUS CHALLENGE 2:
------------------------

- Clone the repo again, in a new location on your hard-drive. Make
a change in one location, push it up, then use "pull" to retrieve the
change in the other location.
# DONE

BONUS CHALLENGE 3:
------------------------

- Use this technique to publish your homework that is due!  Then go to the
  Settings tab on your GitHub repo page to publish it to the world using the
  "GitHub Pages" feature.
# WHAT HW??