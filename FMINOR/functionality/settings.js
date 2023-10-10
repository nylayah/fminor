import {combineReducers} from 'redux';


const lightModeReducer = (state = true, action) => {
    switch(action.type) {
        case 'TOGGLE_LIGHT_MODE':
            return !state;
        default:
            return state;
    }
}

const micReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_MIC':
            return !state;
        default:
            return state;
    }
}

const difficultyReducer = (state = 'Easy', action) => {
    switch(action.type) {
        case 'SELECT_DIFFICULTY':
            return action.payload;
        default:
            return state;
    }
}

const instrumentReducer = (state = 'Piano', action) => {
    switch(action.type) {
        case 'SELECT_INSTRUMENT':
            console.log('Instrument: ', action.payload);
            return action.payload;
        default:
            console.log('Instrument: ', action.payload);
            return state;
    }
}

const practiceModeReducer = (state = 'Notes', action) => {
    switch(action.type) {
        case 'SELECT_PRACTICE_MODE':
            console.log('Practice Mode: ', action.payload);
            return action.payload;
        default:
            console.log('Practice Mode: ', action.payload);
            return state;
    }
}

const rootReducer = combineReducers({
    lightMode: lightModeReducer,
    micOn: micReducer,
    difficulty: difficultyReducer,
    instrument: instrumentReducer,
    practiceMode: practiceModeReducer,
});

export default rootReducer;