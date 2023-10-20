Challenge #1: Hint
----------------------


Hint #1: All the right code and data is there. You just need to pass the right
props.

Hint #2: The correct solution ONLY involves modifying App.js where it passes
props down to the NewMessage component.

Hint #3: The goal is to connect the onChangeMessage and onClickSend props in
the NewMessage component to correspond to the App.js messageGotChanged function
and the sendMessage function respectively, so that the events "go up" from the
child to the parent component.  Hint 1: Add a couple of "new props" in
NewMessage below.


Hint #4: Use React Dev Tools to debug.

Hint #5: One line will look like this:

    onChangeMessage={messageGotChanged}



Challenge #2: Hint
----------------------

HINT 1: Broadly, you will follow the following steps:

1. Move the "selectedChannel" state to the App component file
2. Pass the "selectedChannel" down via a prop to the Nav component (this will
require changes in both App.js and Nav.js)
3. Move the "selectChannel" function from the ChannelSelector component up to
the App component, and pass it down via a prop to the ChannelSelector component
4. Pass the "selectedChannel" state down via prop to both the ChannelSelector
component and the Nav component
5. Tie up any loose ends so that when you select a channel in the
ChannelSelector component, it will set the state


HINT 2: We want to move the state variables from the child component
(ChannelSelector) up into the parent component (App). This is a refactor, so
you know you're done when the behavior is be the same. Here are some steps:
1. Start by moving the state code from ChannelSelector into App
2. Then fix references to the state code that existed in ChannelSelector to refer
to props instead
3. Finally pass down those props from App into ChannelSelector

HINT 3: In the end, the App component will refer to ChannelSelector like this:

      <ChannelSelector
        selectedChannel={selectedChannel}
        onSelectChannel={onChooseChannel}
      />


Challenge #3: Hint
----------------------


HINT: In the end, the App component might refer to Nav like this:

      <Nav
        selectedChannel={selectedChannel}
      />




Challenge #4: Hint
----------------------


Hint #1: Update your ChatMessage component to use props for "isStarred" and
"onStarToggle", instead of the state and the function (which you can then delete)


Hint #2: Add state to your App Component as such:


        const [stars, setStars] = useState([1, 3, 4]);
        function toggleStar(indexOfMessage) {
          // TODO, finis this
        }


Hint #3: You'll have to pass down the stars array to the ChatArea

          <ChatArea
            messages={messages}
            stars={stars}
            onStarToggle={toggleStar} />


Hint #4: You'll need to change the ChatArea component's inclusion of
ChatMessage to now reference the "stars" array, and also use the onStarToggle
function

          <ChatMessage
            key={index}
            text={text}
            isStarred={props.stars.includes(index)}
            onStarToggle={() => props.onStarToggle(index)} />


Hint #5: Finally, we need to create a new starring / unstarring logic for our
toggleStar function, as follows (in App):

        const starsCopy = stars.slice();
        if (starsCopy.includes(indexOfMessage)) {
          starsCopy.splice(starsCopy.indexOf(indexOfMessage), 1);
        } else {
          starsCopy.push(indexOfMessage);
        }
        setStars(starsCopy);



Hint #6: Same thing rewritten, but with verbose commenting:

        function toggleStar (indexOfMessage) {
            const starsCopy = stars.slice(); // duplicate stars array

            // Check if the starsCopy array is listing this message as starred
            if (starsCopy.includes(indexOfMessage)) {
                // Presently starred, remove from array
                // (This is the way you remove a particular value from an array in
                // JavaScript, sadly there is no "remove" function.)
                starsCopy.splice(starsCopy.indexOf(indexOfMessage), 1);

            } else {
                // Not presently starred, add to array
                starsCopy.push(indexOfMessage);
            }

            // Finally, set the state with the new starsCopy
            setStars(starsCopy);
        }



Challenge #5: Hint
----------------------


            starCount={stars.length}
