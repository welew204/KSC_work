import React, { useState } from "react";
import "./App.css";

import frodo from "./images/thumbs/frodo.jpg";
import arwen from "./images/thumbs/arwen.jpg";
import gandalf from "./images/thumbs/gandalf.jpg";
import legolas from "./images/thumbs/legolas.png";

import CharacterCardGroup from "./components/CharacterGroup/CharacterGroup";

function App() {
  console.log("heya twerp!~");
  const [characterObj, setCharacterObj] = useState({
    frodo: {
      thumb: frodo,
      fname: "Frodo Baggins",
      bio: `Frodo comes from the Shire. He inherits the
    One Ring from his cousin (referred to as his uncle) Bilbo Baggins
    and undertakes the quest to destroy it in the fires of Mount Doom.`,
      birthYear: "2968 Third Age",
      species: "Hobbit",
      ringOfPower: "The One Ring",
      title: `Deputy Mayor of Michel Delving, Bearer of
    the One Ring, Elf-friend`,
    },
    arwen: {
      thumb: arwen,
      fname: "Arwen",
      bio: `Arwen is the Half-Elven daughter of Elrond
      and Celebrían. She is often called Arwen Undómiel or "Evenstar".
      Arwen was born in TA 241, to Lord Elrond and Lady Celebrían of
      Rivendell. Like her father and brothers, she had the right to
      choose between immortality or mortal life. She lived most of her
      life in Rivendell and Lothlórien interchangeably.`,
      birthYear: "241 Third Age",
      species: "Half-Elven",
      title: `Lady of Rivendell, Queen of the Reunited
      Kingdom`,
    },
    gandalf: {
      thumb: gandalf,
      fname: "Gandalf",
      bio: `Gandalf joined Thorin and his company to
      reclaim the Lonely Mountain from Smaug, convoked the Fellowship of
      the Ring to destroy the One Ring, and leads the Free Peoples in
      the final campaign of the War of the Ring. `,
      birthYear: "Unknown",
      species: "Maia",
      ringOfPower: "Narya",
      title: `Servant of the Secret Fire, Elf-friend,
      Istar (Wizard), Wielder of the Flame of Anor, Ring-bearer`,
    },
    legolas: {
      thumb: legolas,
      fname: "Legolas",
      bio: `They're taking the hobbits to Isengard!`,
      birthYear: "2594 Third Age",
      species: "Elf",
      title: `Prince of the Woodland Realm`,
    },
  });

  return (
    <div className='App'>
      <section id='main'>
        <h1>The Fellowship of the Ring</h1>
        <CharacterCardGroup characterObj={characterObj} />
      </section>
    </div>
  );
}

export default App;
