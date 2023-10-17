
Challenge #1: HINT
------------------------------------------------------------

      function addAnimal() {
        console.log('adding a new animal!', animals);
        /* ... rest of the function below ... */
      }


- If you have React Dev Tools, also bring that up and use that to figure out
  how the current form is working.



Challenge #2: HINT
------------------------------------------------------------

- Hint 1: The map itself looks something like:

        {
          SOMETHING.map(animal => (
            <div>...</div>               
          ))
        }

- Hint 2:

        <div className="Animal">
          <img src={animal.image} alt="Animal" />
          <p>{animal.name} the {animal.type}</p>
        </div>

- Hint 3:

          {/* Challenge #2 can go here ---v */}
          {
            animals.map(animal => (
              <div>...just a placeholder.....</div>
            ))
          }


- Hint 4 (solution):

          {
            animals.map(animal => (
              <div className="Animal">
                <img src={animal.image} alt="Animal" />
                <p>{animal.name} the {animal.type}</p>
              </div>
            ))
          }


- Explanation: Why does it look like this? Why not setAnimals? Well, the set is
  for modifying the state. The `.map` is for displaying the state. Right now,
  we are trying to display the animals, since we are already successfully
  modifying the state to include the animals. The setAnimals is already done,
  the state is updated, what we need to do now is re-render the HTML, using JSX
  (in particular `.map`). That's the piece of the puzzle missing right now.



Challenge #3: HINT
------------------------------------------------------------

Hint 1: Once combined, it will look something like (some code left blank):

      {
        animals
          .filter(                                          )
          .map(       => (
      }


Hint 2: Combine the "searchTerm" with the includes, like:

      .filter(animal => animal.name.includes(searchTerm))



Challenge #5: HINT
------------------------------------------------------------

        {
          animalTypes.map(animalType => (
            <option value={animalType.type}>
              {animalType.type}
            </option>
          ))
        }



Challenge #6: HINT
------------------------------------------------------------

      .filter(animal => limitBy === false || animal.type === limitBy)


