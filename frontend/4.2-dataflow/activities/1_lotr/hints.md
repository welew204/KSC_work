
Challenge #1: Hints
------------------------------------------------------------

- The console.log can go anywhere, e.g. in the function or above it. The goal
  is to just ensure we are editing the right file
- The repeating element is each of the character cards
- Their props are:
    - props.image
    - props.name
    - props.bio
    - props.birthYear
    - props.species
    - props.ring (only for Gandalf and Frodo)
    - props.title




Challenge #3: Hints
----------------------

Hint 1: To use a prop handed down from the parent, use code like this *within*
the child component's JSX (in this case, within CharacterCard):

    <img src={props.image} />
    <h1>{props.name}</h1>
    <p><strong>Bio:</strong> {props.bio}</p>

    {/* Etc... */}

Hint 2: To use a component in App.js, you must import it first, something like:

    import CharacterCard from './components/CharacterCard/CharacterCard.js';

Hint 3: This is how Frodo should be specified in App.js, using the new
CharacterCard component:

    <CharacterCard
        image={frodo}
        name="Frodo Baggins"
        bio={`Frodo comes from the Shire. He inherits the One Ring from his
            cousin (referred to as his uncle) Bilbo Baggins and undertakes
            the quest to destroy it in the fires of Mount Doom.`}
        birthYear="2968 Third Age"
        species="Hobbit"
        ring="The One Ring"
        title="Deputy Mayor of Michel Delving, Bearer of the One Ring"
    />

Note: The "backtick" quote in bio is to allow multi-line strings.





Challenge #5: Hints
----------------------

- Hint 1: Use "children props" so that you can put the CharacterCards "within"
  the CharacterCardGroup. Within CharacterCardGroup JSX, you can access the
  children like this:

    <div>
        {props.children}
    </div>

- Hint 2: In App.js, it will end up looking like it will end up looking a lot
  like this:

    <CharacterCardGroup>
        <CharacterCard
            image={frodo}
            name="Frodo Baggins"
            (...more stuff...)
        />
        <CharacterCard
            image={arwen}
            name="Arwen"
            (...more stuff...)
        /> 
        (...repeat for Gandalf & Legolas...)
    </CharacterCardGroup>




