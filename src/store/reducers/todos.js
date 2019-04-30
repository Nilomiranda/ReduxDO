const INITIAL_STATE = [
  { id: 1, text: "Prepare coffee" },
  { id: 2, text: "Make a new website" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
