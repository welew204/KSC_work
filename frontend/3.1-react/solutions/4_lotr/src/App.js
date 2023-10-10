import React from 'react';
import './main.css';

import frodo from './images/thumbs/frodo.jpg';
import aragorn from './images/thumbs/aragorn.png';
import gandalf from './images/thumbs/gandalf.jpg';
import legolas from './images/thumbs/legolas.png';

function App() {
  let bioLegolas = "They're taking the hobbits to Isengard!";

  return (
    <div className="App">
    
      <div id="wrapper">
        <section id="main">
    
          <h1>Fellowship of the React</h1>
          <section className="thumbnails">
            <div>
              <a>
                <img src={frodo} alt="Frodo" />
                <h1>Frodo Baggins</h1>
                <p><strong>BIO:</strong> Frodo comes from the
                            Shire. He inherits the One Ring from his
                            cousin (referred to as his uncle) Bilbo
                            Baggins and undertakes the quest to destroy it
                            in the fires of Mount Doom.</p>
                <p><strong>Portrayed by:</strong> Elijah Wood</p>
    
                <p><strong>Species:</strong> Hobbit</p>
    
                <p><strong>Title:</strong> Deputy Mayor of Michel Delving,
                            Bearer of the One Ring, Elf-friend</p>
              </a>
            </div>
            <div>
              <a>
                <img src={gandalf} alt="Gandalf"/>
                <h1>Gandalf</h1>
    
                <p><strong>BIO:</strong> He is a member of the Istari
                            order, as well as leader of the Fellowship of the Ring and
                            the army of the West.</p>
    
                <p><strong>Portrayed by:</strong> Ian McKellen</p>
    
                <p><strong>Species:</strong> Maia</p>
    
                <p><strong>Title:</strong> Servant of the Secret Fire,
                            Elf-friend, Istar (Wizard), Wielder of the Flame of Anor,
                            Ring-bearer</p>
              </a>
            </div>
            <div>
              <a>
                <img src={aragorn} alt="Aragorn"/>
                <h1>Aragorn</h1>
    
                <p><strong>BIO:</strong> He was a Ranger of the North,
                            first introduced with the name Strider at Bree. He was
                            eventually revealed to be the heir of Isildur and rightful
                            claimant to the thrones of Arnor and Gondor.</p>
    
                <p><strong>Portrayed by:</strong> Viggo Mortensen</p>
    
                <p><strong>Species:</strong> Human</p>
    
                <p><strong>Title:</strong> Chieftain of the Dúnedain, King
                            of the Reunited Kingdom</p>
              </a>
            </div>
            <div>
              <a>
                <img src={legolas} alt="Legolas"/>
                <h1>Legolas</h1>
                <p><strong>BIO:</strong>{ bioLegolas }</p>
    
                <p><strong>Portrayed by:</strong> Orlando Bloom</p>
    
                <p><strong>Species:</strong> Elf</p>
    
                <p><strong>Title:</strong> Prince of the Woodland Realm
                </p>
              </a>
            </div>
          </section>
        </section>
      </div>
    
    </div>
  );
}
  
export default App;
