
// state
const initialState = {
  userid: 0,
  username: '',
  profile_picture: '',
  chosenItem: {}
}

// actionTypes
const CHOSEN_ITEM = "CHOSEN_ITEM";

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHOSEN_ITEM:
      return Object.assign({}, state, {chosenItem: action.payload});
    default:
      return state;
  }
}

// actions
export const chosenItem = (item) => {
  return {
    type: CHOSEN_ITEM,
    payload: item
  }
}

export default reducer;