Mongo Practice

- General advice: Keep Use the MongoDB Documentation open while doing these
  activities, as it has the syntax and examples for each of these operations.

- You can find it here: https://docs.mongodb.com/manual/mongo/

Challenge #1
-------------------

Your first goal is to get going with a MongoDB database.

- Install the MongoDB client
    - Ubuntu Linux:
        - sudo apt install mongodb-clients
    - macOS:
        - brew tap mongodb/brew
        - brew install mongodb-community


- Set-up MongoDB Atlas. The guide is below:

<https://github.com/kickstartcoding/react-mern-prototyping-starter/blob/master/mongodb_atlas_guide.md>

- You should complete through "Connect to your cluster" -- the "Connect your
  cluster to your MERN backend" is only for future activities



Challenge #2
-------------------

1. Start by switching to your database:

    use classactivity

2. If you are using a shared MongoDB with other students, and are not working
on your own, then use a unique db name to avoid clashing with other students:

    use classactivity_YOURNAMEGOESHERE


3. Then, let's do the "C" in "CRUD" -- CREATE. Within a collection called
"osmascots", insert each of these three documents:

    { type: "penguin", name: "tux" }
    { type: "platypus", name: "hexley" }
    { type: "wildebeest", name: "gnu" }

Hint: Here's how to do it for "tux":

    db.osmascots.insertOne({ type: "penguin", name: "tux" })



Challenge #3
-------------------

We're now going to practice all the CRUD operations, using the MongoDB database.

R in CRUD

1. Use "find" to see all the animals you added
2. Use "find" to selectively only find the platypus
3. Use "find" to selectively only find the penguin
4. Use "find" to selectively only find the animals named "gnu"

Hint: Here's how to find EVERYTHING:

    db.osmascots.find({ })

And here's how to find just a wildebeest:

    db.osmascots.find({type: "wildebeest"})


Challenge #4
-------------------
U in CRUD

Using "update", do the following:

- Update the penguin document to have a property called "mascotOf", equal to
  "Linux"
- Update the platypus to have "mascotOf" equal to "Darwin"
- Update the wildebeest to have "mascotOf" equal to "GNU Project"
- Confirm you were successful using "find"

Hint: Here's how to update Linux:

    db.osmascots.update({type: "penguin"}, {$set: {mascotOf: "Linux"}})


Challenge #5
-------------------
D in CRUD

- One by one, delete each of the animals, using deleteOne
- After deleting each one, ensure you are deleting it using "find"

Hint: Look up or guess the syntax for deleteOne




Challenge #6
-------------------

These remaining challenges will repeat the command we just learned, but with
more challenging (and more complicated) data set, so we can get deeper
practice.

C in CRUD

- Open the `lotr_info.txt` document
- Insert each of these characters into a collection called "characters"
- Ensure you create their documents such that the "titles" attribute an
array of strings (not a single comma separated string)

Hint: Look up online the insertMany documentation if you want to do it all in
one long command



Challenge #7
-------------------
R in CRUD

Lots of more tricky reads! Use the MongoDB documentation to research and find
out how to do the following using MongoDB:

- Look up all characters in alphabetical order by actor
- Look up all characters in reverse alphabetical order by name
- Look up all characters with a title "Ring-bearer"
- Look up all characters with the title "Elf-friend"



Challenge #8
-------------------
U & D in CRUD

Hint: Look up {"multi": true}
>>>> https://www.mongodb.com/docs/manual/reference/method/db.collection.update/#std-label-update-multi

- Push the title "Member of the Fellowship" to all characters
- Push the title "Ringbound" to all characters with the title "Hunter"
- Remove the title "Elf-friend" from Frodo

