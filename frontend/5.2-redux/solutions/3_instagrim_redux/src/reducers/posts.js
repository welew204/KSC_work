// Reducers for Posts "slice"
import {createSlice} from '@reduxjs/toolkit';

// Bring in some "helper" utility code from miscutils.js
// Challenge: No longer needed!
//import {chooseRandom, avatars} from '../miscutils.js';
import {getNextID} from '../miscutils.js';

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

      // Challenge solution: Get the avatar from the payload!
      // const avatar = chooseRandom(avatars);

      // With add another post to the end of the array
      state.push({
        id: nextID,
        title: action.payload.title,
        avatar: action.payload.avatarSrc,
        //avatar: avatar,
      });
    },

    // Bonus Challenge Solution:
    deletePost: (state, action) => {

      // A way to remove an element from an array without a loop
      const i = state.findIndex(avatar => avatar.id === action.payload.id);
      state.splice(i, 1);
    },

    // Bonus Challenge Solution:
    updatePost: (state, action) => {

      // A way to remove an element from an array without a loop
      const i = state.findIndex(avatar => avatar.id === action.payload.id);
      state[i].title = action.payload.newTitle;
    },

  },
});

export {actions, reducer};
