// create the default state of the model
const defaultState = {
  items:[]
};

// create the reducers that will control the model
const timelineReducer = (state = defaultState, action) => {
  switch (action.type) {
    // remember not to mutate the state
    case 'ADD_ITEMS':
        let newItems = action.value;
        //console.log(newItems.items)
        let newState = Object.assign({}, state);
        newState.items = newState.items.concat(newItems.items);
        return newState
    default:
        return state;
  }
};

export default timelineReducer;
