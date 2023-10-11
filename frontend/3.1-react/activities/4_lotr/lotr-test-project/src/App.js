import Frodo from "./images/thumbs/frodo.jpg";
import Gandalf from "./images/thumbs/gandalf.jpg";
import Aragorn from "./images/thumbs/aragorn.png";
import Legolas from "./images/thumbs/legolas.png";
import "./App.css";
import "./main.css";

function App() {
  let lego_bio = "They're taking the hobbits to Isengard!";
  return (
    <div id='wrapper'>
      <section id='main'>
        <h1>Fellowship of the React</h1>
        <section className='thumbnails'>
          <div>
            <img alt='' src={Frodo} />
            <h1>Frodo Baggins</h1>
            <p>
              <strong>BIO:</strong> Frodo comes from the Shire. He inherits the
              One Ring from his cousin (referred to as his uncle) Bilbo Baggins
              and undertakes the quest to destroy it in the fires of Mount Doom.
            </p>
            <p>
              <strong>Portrayed by:</strong> Elijah Wood
            </p>
            <p>
              <strong>Species:</strong> Hobbit
            </p>
            <p>
              <strong>Title:</strong> Deputy Mayor of Michel Delving, Bearer of
              the One Ring, Elf-friend
            </p>{" "}
          </div>
          <div>
            <img alt='' src={Gandalf} />
            <h1>Gandalf</h1>

            <p>
              <strong>BIO:</strong> He imember of the Istari order, as well as
              leader of the Fellowship of the Ring and the army of the West.
            </p>

            <p>
              <strong>Portrayed by:</strong> Ian McKellen
            </p>

            <p>
              <strong>Species:</strong> Maia
            </p>

            <p>
              <strong>Title:</strong> Servant of the Secret Fire, Elf-friend,
              Istar (Wizard), Wielder of the Flame of Anor, Ring-bearer
            </p>
          </div>
          <div>
            <img alt='' src={Aragorn} />
            <h1>Aragorn</h1>

            <p>
              <strong>BIO:</strong> He waRanger of the North, first introduced
              with the name Strider at Bree. He was eventually revealed to be
              the heir of Isildur and rightful claimant to the thrones of Arnor
              and Gondor.
            </p>

            <p>
              <strong>Portrayed by:</strong> Viggo Mortensen
            </p>

            <p>
              <strong>Species:</strong> Human
            </p>

            <p>
              <strong>Title:</strong> Chieftain of the Dúnedain, King of the
              Reunited Kingdom
            </p>
          </div>
          <div>
            <img alt='' src={Legolas} />
            <h1>Legolas</h1>
            <p>
              <strong>BIO:</strong> {lego_bio}
            </p>
            <p>
              <strong>Portrayed by:</strong> Orlando Bloom
            </p>
            <p>
              <strong>Species:</strong> Elf
            </p>
            <p>
              <strong>Title:</strong> Prince of the Woodland Realm
            </p>{" "}
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
