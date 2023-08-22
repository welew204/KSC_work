Make one of the following three games, in Python, from scratch.

This is review activity strengthening all of the coding constructs and
data-types we've learned thus far.  All of these games will likely require use
of if statements, print, input, functions, for-loops, while loops, variables,
lists, and dictionaries.

Tips:

- Use all tools at your disposal to plan out your code before you begin
  (Pseudocode, state diagrams, etc)
- Always start with a print statement
- Don't get ahead of yourself: Get one thing working at a time


1 - Trivia (Easiest)
---------------------

- Make a trivia game. You have the skills to do this. When complete, it should
  ask a series of questions, such as about capitals of countries. It should
  keep track of correct and incorrect guesses, and give you your "score".

- Start with the bare minimum: Get a single "hardcoded" question to work, using
  code we've learned such as input(), if, else, etc

- Then work on creating variables to hold the score (perhaps: number wrong and
  number correct)

- Only after you've gotten a two or three "hardcoded" questions working,
  including with the score, think about refactoring.

- Tips for refactoring:
    - Consider refactoring asking a single question into a function.
    - Consider using some data structure consisting of lists and/or
      dictionaries, to hold questions and answers.
    - Consider using a for-loop to go through the data structure.


2 - Anagrams
---------------------

- Make an anagrams game, where the player must attempt to "unscramble" the
  letters in a word.
- This game must display a word, except the letters will be scrambled in a
  random order
- The user must then type in what they think the word is. They win if they type
  in the right one.
- Hint: Here is a bit of code that will scramble a word:

    import random
    word = ['t', 'r', 'i', 'c', 'y', 'c', 'l', 'e']
    random.shuffle(word)
    print(word)

- Bonus: Can you make it chose a random word each time?
- Difficult Bonus: Can you give it a time limit? (This is actually quite hard)


3 - Hangman
---------------------

- Make a hangman game. If you feel stuck starting from scratch, see the bonus
  activity from last lesson.
- While the final application should pick a random word each time, during
  development, have it use the same word over and over, for testing.
- At first, the word will show as a bunch of underscores, like "_ _ _ _ _"
- For every correct letter the user guesses, it should replace one-by-one the
  underscores with correct letters, gradually filling in the word
- Focus on getting the basics working first before thinking about winning or
  losing!






Bonus (no solution): RPG Battle
------------------------------------

- If you have played an RPG game, such as a Pokemon game, you will know there
  is a "turn based" battle system, where you must face off against an opponent,
  and are given various strategic choices on each turn.
- It must keep track of your health, your magic or ability points, and you must
  have one or two attack options, and the ability to defend.
- The opponent must attack each turn, or use some other ability.  This will
  hurt your character by subtracting health from the health variable.
- If the player character's health is 0, they lose.
- If the enemy's health goes down to 0, then the user wins.
- If you have time, add the ability to "level up" your character.  Your
  character should grow in power after every round, and maybe be able to
  challenge one opponent after another.

