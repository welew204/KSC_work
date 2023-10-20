import React from 'react';
import './App.css';

import frodo from './images/thumbs/frodo.jpg';
import arwen from './images/thumbs/arwen.jpg';
import gandalf from './images/thumbs/gandalf.jpg';
import legolas from './images/thumbs/legolas.png';

function App() {

  return (
    <div className="App">
      <section id="main">
        <h1>The Fellowship of the Ring</h1>

        <section className="CharacterCardGroup">
          <div className="CharacterCard">
            <img src={frodo} alt="Frodo" />

            <h1>Frodo Baggins</h1>

            <p><strong>Bio:</strong> Frodo comes from the Shire.  He inherits
            the One Ring from his cousin (referred to as his uncle) Bilbo
            Baggins and undertakes the quest to destroy it in the fires of
            Mount Doom.</p>

            <p><strong>Birth Year:</strong> 2968 Third Age</p>

            <p><strong>Species:</strong> Hobbit</p>

            <p><strong>Ring of Power:</strong> The One Ring</p>

            <p><strong>Title:</strong> Deputy Mayor of Michel Delving, Bearer
            of the One Ring, Elf-friend</p>
          </div>

          <div className="CharacterCard">
            <img src={arwen} alt="arwen" />
            <h1>Arwen</h1>

            <p><strong>Bio:</strong> Arwen is the Half-Elven daughter of Elrond
            and Celebrían. She is often called Arwen Undómiel or "Evenstar".
            Arwen was born in TA 241, to Lord Elrond and Lady Celebrían of
            Rivendell. Like her father and brothers, she had the right to
            choose between immortality or mortal life. She lived most of her
            life in Rivendell and Lothlórien interchangeably.</p>

            <p><strong>Birthyear:</strong> 241 Third Age</p>

            <p><strong>Species:</strong> Half-Elven</p>

            <p><strong>Title:</strong> Lady of Rivendell, Queen of the Reunited
            Kingdom</p>
          </div>

          <div className="CharacterCard">
            <img src={gandalf} alt="Gandalf" />
            <h1>Gandalf</h1>

            <p><strong>Bio: </strong> Gandalf joined Thorin and his company to
            reclaim the Lonely Mountain from Smaug, convoked the Fellowship of
            the Ring to destroy the One Ring, and leads the Free Peoples in the
            final campaign of the War of the Ring.  </p>

            <p><strong>Birthyear:</strong> Unknown</p>

            <p><strong>Species:</strong> Maia</p>

            <p><strong>Ring of Power:</strong> Narya</p>

            <p><strong>Title:</strong> Servant of the Secret Fire, Elf-friend,
            Istar (Wizard), Wielder of the Flame of Anor, Ring-bearer</p>
          </div>

          <div className="CharacterCard">
            <img src={legolas} alt="Legolas" />
            <h1>Legolas</h1>

            <p><strong>Bio:</strong> They're taking the hobbits to
            Isengard!</p>

            <p><strong>Species:</strong> Elf</p>

            <p><strong>Birthyear:</strong> 2594 Third Age</p>

            <p><strong>Title:</strong> Prince of the Woodland Realm</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
