In this activity, we "shift gears" from Git back to general Bash knowledge, to
pick up one more skill: Bash Scripting.  Using your terminal and text editor,
solve the following challenges.


Challenge 1:
------------------

1. In your text editor, save a file called "myfirstbash.sh"

2. Inside that file, copy in the following code:

    echo "Hello bash world"
    date
    echo "Here are my files:"
    ls
    echo "Goodbye!"

3. Run it using:

    bash myfirstbash.sh


4. Can you understand what it is doing, how it is working?

Challenge 2:
------------------

Now, take the commands that you used in the previous activity, and save them in
a file called "buildpoem.sh", such that they will combine the Jabberwocky poem
into a single text file every time you run it.

As a hint, here are useful commands:

    cd 1-jabberwocky/
    cat jabberwocky_a.txt jabberwocky_b.txt jabberwocky_c.txt > full_poem.txt

Once you have created buildpoem.sh, run it like:

    bash buildpoem.sh

# DONE

Challenge 3:
------------------

Once again, redo the previous activity, but instead of running each cat command
on the terminal, save it first into a shell script file named "buildsite.sh", then
run the file.

Once you have created buildsite.sh, run it like:

    bash buildsite.sh

Each time you run that file, it should "rebuild" or regenerate the website, as
in re-combine the fragments into the resulting combined version. This is very
useful for Homework 2!
# DONE

BONUS CHALLENGE
------------------

- Make a change to one of the HTML fragment files (either in content or
  templates), then re-run the shell script and confirm that it "updates" from
  the previous time.

- As with the previous bonus challenge, can you modify your bash script to use
  "docs/" directory instead (see previous bonus challenge)?
