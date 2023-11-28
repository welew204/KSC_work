// Reducers for Posts "slice"
import {createSlice} from '@reduxjs/toolkit';

// Challenge Solution: Use the getNextID helper function
import {getNextID} from '../miscutils.js';

// Create our actions and reducer
const {actions, reducer} = createSlice({
  name: 'TODO',
  initialState: [
    {
      imageSrc: 'https://i.imgur.com/e7Tr5Gq.png',
      id: 1,
    },
    {
      imageSrc: 'https://i.imgur.com/OxASz9Q.png',
      id: 2,
    },
    {
      imageSrc: 'https://i.imgur.com/UnZOKeB.png',
      id: 3,
    },
    {
      imageSrc: 'https://i.imgur.com/5X3mAjh.png',
      id: 4,
    },
    {
      imageSrc: 'https://i.imgur.com/fpPq7Rx.png',
      id: 5,
    },
    {
      imageSrc: 'https://i.imgur.com/QEgdU4V.png',
      id: 6,
    },
    {
      imageSrc: 'https://i.imgur.com/PrVtCBL.png',
      id: 7,
    },
    {
      imageSrc: 'https://i.imgur.com/rkyzraE.png',
      id: 8,
    },
    {
      imageSrc: 'https://i.imgur.com/vu6HOgM.png',
      id: 9,
    },
  ],

  reducers: {

    // Challenge Solution: add createAvatar reducer
    createAvatar: (state, action) => {
      const nextID = getNextID(state);

      // With add another post to the end of the array
      state.push({
        id: nextID,
        imageSrc: action.payload.imageUrl,
      });
    },

    // Challenge Solution: add deleteAvatar reducer
    deleteAvatar: (state, action) => {
      for (const task of state) {
        // Loop through the array looking for the avatar of given ID
        if (task.id === action.payload.id) {
          const index = state.indexOf(task);
          state.splice(index, 1); // delete the item
          break; // exit the loop
        }
      }
    },

  },
});

export {actions, reducer};
