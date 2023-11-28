// Reducers for Posts "slice"
import {createSlice} from '@reduxjs/toolkit';

// Bring in some "helper" utility functions from miscutils.js
import {chooseRandom, avatars, getNextID} from '../miscutils.js';

// Create our actions and reducer
const {actions, reducer} = createSlice({
  name: 'posts',
  initialState: [
    {
      title: 'Do some spooky things',
      avatar: 'https://i.imgur.com/OxASz9Q.png',
      id: 1,
    },
    {
      title: 'Be spooky',
      avatar: 'https://i.imgur.com/5X3mAjh.png',
      id: 2,
    },

    {
      title: "Dance like you're dead",
      avatar: 'https://i.imgur.com/rkyzraE.png',
      id: 3,
    },

    {
      title: 'Have a ghoulish day',
      avatar: 'https://i.imgur.com/PrVtCBL.png',
      id: 4,
    },
  ],

  // Define the different action types, and the reducers that handle them
  // (cause the action to occur by modifying the state). Since we are using
  // react-toolkit, it allows us to "modify" the state in place (in reality it
  // is making a copy of state for us to modify), making modifying container
  // types much more straight-forward.
  reducers: {
    createPost: (state, action) => {
      const nextID = getNextID(state);

      // Here we get a random avatar from the list of avatars
      const avatar = chooseRandom(avatars);

      // NOTE: In real life, reducers should never have random behavior! It
      // "breaks the rules" of Redux. This will be fixed by a challenge.

      // With add another post to the end of the array
      state.push({
        id: nextID,
        title: action.payload.title,
        avatar: avatar,
      });
    },

    // Challenge 7 & 8 will go here
  },
});

export {actions, reducer};
