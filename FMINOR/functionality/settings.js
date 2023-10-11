import { combineReducers } from 'redux';

const settingsReducer = (state = {
  lightMode: true,
  micOn: false,
  difficulty: 'Easy',
  instrument: 'Piano',
  practiceMode: 'Notes',
}, action) => {
  switch (action.type) {
    case 'TOGGLE_LIGHT_MODE':
      return { ...state, lightMode: !state.lightMode };
    case 'TOGGLE_MIC':
      return { ...state, micOn: !state.micOn };
    case 'SELECT_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SELECT_INSTRUMENT':
      return { ...state, instrument: action.payload };
    case 'SELECT_PRACTICE_MODE':
      return { ...state, practiceMode: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default settingsReducer;