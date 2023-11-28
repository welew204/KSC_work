export const avatars = [
  'https://i.imgur.com/e7Tr5Gq.png',
  'https://i.imgur.com/OxASz9Q.png',
  'https://i.imgur.com/UnZOKeB.png',
  'https://i.imgur.com/5X3mAjh.png',
  'https://i.imgur.com/fpPq7Rx.png',
  'https://i.imgur.com/QEgdU4V.png',
  'https://i.imgur.com/PrVtCBL.png',
  'https://i.imgur.com/rkyzraE.png',
  'https://i.imgur.com/vu6HOgM.png',
];

export function chooseRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export function getNextID(arr) {
  // Figure out the next available ID by getting the largest current ID of the
  // given array, assuming each item in the array has a property called "id",
  // and adding 1
  const allIds = arr.map(item => item.id);
  const nextID = Math.max(...allIds) + 1;
  return nextID;
}
