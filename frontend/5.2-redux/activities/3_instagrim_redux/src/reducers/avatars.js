// Reducers for Posts "slice"
import { createSlice } from "@reduxjs/toolkit";

import { getNextID } from "../miscutils.js";

// Create our actions and reducer
const { actions, reducer } = createSlice({
  name: "avatars",

  initialState: [
    {
      imageSrc: "https://i.imgur.com/e7Tr5Gq.png",
      id: 1,
    },
    {
      imageSrc: "https://i.imgur.com/OxASz9Q.png",
      id: 2,
    },
    {
      imageSrc: "https://i.imgur.com/UnZOKeB.png",
      id: 3,
    },
    {
      imageSrc: "https://i.imgur.com/5X3mAjh.png",
      id: 4,
    },
    {
      imageSrc: "https://i.imgur.com/fpPq7Rx.png",
      id: 5,
    },
    {
      imageSrc: "https://i.imgur.com/QEgdU4V.png",
      id: 6,
    },
    {
      imageSrc: "https://i.imgur.com/PrVtCBL.png",
      id: 7,
    },
    {
      imageSrc: "https://i.imgur.com/rkyzraE.png",
      id: 8,
    },
    {
      imageSrc: "https://i.imgur.com/vu6HOgM.png",
      id: 9,
    },
  ],
  // TODO: Challenge 2 will get solved here...

  reducers: {
    createAvatar: (state, action) => {
      const nextID = getNextID(state);

      //console.log(action.payload.title);
      const avatarSrc = action.payload.title;
      // With add another post to the end of the array
      state.push({
        id: nextID,
        imageSrc: avatarSrc,
      });
    },
    deleteAvatar: (state, action) => {
      const targ = state.findIndex((av) => av.id === action.payload.id);
      //console.log(targ);
      state.splice(targ, 1);
    },

    // Challenge 7 & 8 will go here
  },
});

export { actions, reducer };
