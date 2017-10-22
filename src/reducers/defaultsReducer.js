// create the default state of the model
const defaultState = {
  lang:'en-us',
  timelineJsonPath:'/static/json/timeline.json'
};

// create the reducers that will control the model
const defaultsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // remember not to mutate the state
    case 'DEFAULTS_CHANGE_LANGUAGE':
        return Object.assign({}, state, {
            lang:action.lang
        });
    default:
        return state;
  }
};

export default defaultsReducer;
