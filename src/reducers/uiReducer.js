const defaultState = {
  lightbox:{
      visible:false,
      url:'about:blank'
  },
  summaryMaxLength:350
};

// create the reducers that will control the model
const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    // remember not to mutate the state
    case 'UI_LIGHTBOX':
        return Object.assign({}, state, {
            lightbox:action.value
        });
    default:
        return state;
  }
};

export default uiReducer;
