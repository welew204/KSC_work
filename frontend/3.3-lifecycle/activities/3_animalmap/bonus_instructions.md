Start with instruction.md before attempting these!


- For these Bonus Challenges, a bunch of code snippets are given to you.
- Assemble them to get an "Edit Modal" feature functional
- The feature: An Edit button appears under each animal, clicking on which will
  show a "Edit Modal" to rename that animal
- Starting with the first, and one by one, try guessing where they may go in
  the code to create this feature.
- Most of this can be included without any editing. However, there are a few
  placeholders, including a few "console.log('TODO')" in events. These need to
  be replaced with invocations of certain function.


Bonus Challenge Snippet #1
------------------------------------------------------------

      const [editModalIndex, setEditModalIndex] = useState(null);
      console.log('index is:', editModalIndex);




Bonus Challenge Snippet #2
------------------------------------------------------------

      .map((animal, index) => (
        <div className="Animal">
          <img src={animal.image} alt="Animal" />
          <p>{animal.name} the {animal.type}</p>
          <button onClick={() => setEditModalIndex(index)}>Edit</button>
        </div>
      ))



Bonus Challenge Snippet #3
------------------------------------------------------------


      {
        /* Conditionally show the modal */
        editModalIndex !== null ? (
          <div className="EditModal">
            <div className="EditModal-backdrop"></div>
            <div className="EditModal-contents">
              <div className="EditModal-title">Edit Animal</div>
              TODO....
              <button onClick={() => setEditModalIndex(null)}>Save</button>
            </div>
          </div>
        ) : null
      }



Bonus Challenge Snippet #4
------------------------------------------------------------


      function setEditModalAnimalName(ev) {
        const value = ev.target.value;
        // Update the selected animal
        const updatedAnimal = {
          ...animals[editModalIndex],
          name: value,
        };
        // And update the animals array to include that animal in the spot
        // where it used to be
        setAnimals([
          ...animals.slice(0, editModalIndex),
          updatedAnimal,
          ...animals.slice(editModalIndex + 1),
        ])
      }




Bonus Challenge Snippet #5
------------------------------------------------------------

      <input
          value={animals[editModalIndex].name}
          onChange={setEditModalAnimalName}
        />
      <button onClick={() => console.log('TODO: FIX ME')}>Delete</button>



Bonus Challenge Snippet #6
------------------------------------------------------------

      function deleteAnimal() {
        const animalsCopy = animals.slice(); // Copies array
        // Remove the one at the given index:
        animalsCopy.splice(editModalIndex, 1);
        setAnimals(animalsCopy);
        setEditModalIndex(null); // hide modal
      }


Advanced Bonus Challenges
------------------------------------------------------------

- Can you figure out how to make it so that when you click on the backdrop of
  the Edit Modal (e.g. the shaded region), it makes the modal disappear?

- Can you rewrite the existing animal selector code to store the index of the
  selected animal (instead of the object), to ensure there's a default animal
  selected when you first start the app?

- Can you think of a way to rewrite the deleteAnimal function to use the `...`
  syntax (array spread syntax) to remove the item from the array, instead of
  using its current style?

- How could you implement the code modal such that when it shows it will "slide
  down" using CSS transitions?

