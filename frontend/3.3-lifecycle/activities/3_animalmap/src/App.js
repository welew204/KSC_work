import React, { useState } from "react";
import "./App.css";

// Import our animal images
import catImage from "./images/cat.png";
import cowImage from "./images/cow.png";
import dogImage from "./images/dog.png";
import pigImage from "./images/pig.png";
import ratImage from "./images/rat.png";

// Create a global list of animal types, used to populate the selector
const animalTypes = [
  { type: "cat", imageSrc: catImage },
  { type: "cow", imageSrc: cowImage },
  { type: "dog", imageSrc: dogImage },
  { type: "pig", imageSrc: pigImage },
  { type: "rat", imageSrc: ratImage },
];

function App() {
  const [name, setName] = useState("");
  const [newAnimalInfo, setNewAnimalInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [limitBy, setLimitBy] = useState(false);
  const [animals, setAnimals] = useState([
    { name: "whiskers", image: catImage, type: "cat" },
    { name: "doggerino", image: dogImage, type: "dog" },
    { name: "mickey", image: ratImage, type: "rat" },
  ]);

  function onNameChange(ev) {
    const newName = ev.target.value;
    setName(newName);
  }

  function addAnimal() {
    console.log(animals);
    // Create a new object to represent the animal that we are adding
    const newAnimal = {
      name: name,
      image: newAnimalInfo.imageSrc,
      type: newAnimalInfo.type,
    };
    setAnimals([
      // Add that object to the end of the array
      ...animals, // the "..." means include the previous contents of the array
      newAnimal, // and this means include the new object
    ]);
  }

  function onLimitByChange(ev) {
    // Will be used by challenge 5
    //console.log("filtering animals by tupe....");
    const value = ev.target.value;
    console.log("onLimitByChange", value);
    if (value === "all") {
      setLimitBy(false); // if "all" is selected, set to false
    } else {
      // otherwise, just set with value
      setLimitBy(value);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Petting Zoo Tracker</h1>
        {/* Challenge 4 can go here ----v */}

        <label>
          Search:{" "}
          <input
            value={searchTerm}
            onChange={(ev) => setSearchTerm(ev.target.value)}
          />
        </label>

        <label>
          {" "}
          Only show:
          <select onChange={onLimitByChange} value={limitBy}>
            <option value='all'>all</option>
            {animalTypes.map((anm) => (
              <option value={anm.type}>{anm.type}</option>
            ))}
          </select>
        </label>
      </header>

      <div className='AnimalForm'>
        <div className='AnimalForm-animalSelector'>
          {animalTypes.map((animalType) => (
            <label key={animalType.type}>
              <input
                type='radio'
                value={animalType.type}
                checked={newAnimalInfo.type === animalType.type}
                onChange={() => setNewAnimalInfo(animalType)}
              />
              <img src={animalType.imageSrc} alt='Animal' />
            </label>
          ))}
        </div>
        <input
          placeholder='Name your animal'
          value={name}
          onChange={onNameChange}
        />
        <button onClick={addAnimal}>Add Animal</button>
      </div>

      <div className='App-body'>
        {
          animals
            // this first filter says... include animal IF limitBy is not set OR limitBy matches the animals type
            .filter((anm) => limitBy === false || anm.type === limitBy)
            .filter((anm) => anm.name.includes(searchTerm))
            .map((anm) => (
              <div className='Animal'>
                <img src={anm.image} alt='Animal' />
                <p>
                  {anm.name} the {anm.type}
                </p>
              </div>
            )) /* Challenge #2 can go here ---v */
        }
      </div>
    </div>
  );
}

export default App;
