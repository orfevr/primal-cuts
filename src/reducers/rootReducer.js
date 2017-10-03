import { combineReducers } from 'redux'

    //#f44336 - red
    //#8bc34a - light green
    //#9e9e9e - grey
    //#9c27b0 - dark grey
const defaultTheme = {
    backgroundColor: 'white',
    defaultCutColor: '#f44336',
    hoveredCutColor: '#9c27b0',
    selectedCutColor: '#8bc34a',
    disabledCutColor: '#9e9e9e',
    strokeColor: '#4c535b',
    textColor: 'black'
};

const themeReducer = (state = defaultTheme, action) => {
    switch (action.type) {
        case 'SET_CUT_SHEET_BG_COLOR':
            return Object.assign({}, state, { backgroundColor: action.color });
        case 'SET_DEFAULT_CUT_COLOR':
            return Object.assign({}, state, { defaultCutColor: action.color });
        case 'SET_DISABLED_CUT_COLOR':
            return Object.assign({}, state, { disabledCutColor: action.color });
        case 'SET_SELECTED_CUT_COLOR':
            return Object.assign({}, state, { selectedCutColor: action.color });
        case 'SET_HOVERED_CUT_COLOR':
            return Object.assign({}, state, { hoveredCutColor: action.color });
        case 'SET_CUT_STROKE_COLOR':
            return Object.assign({}, state, { strokeColor: action.color });
        case 'SET_TEXT_COLOR':
            return Object.assign({}, state, { textColor: action.color });
        default:
            return state;
    }
};

const selectedCutReducer = (state = {}, action) => {
    if (action.type === 'SELECT_CUT') {
        return Object.assign({}, action.cut);
    }
    else {
        return state;
    }
};

const rootReducer = combineReducers({
    theme: themeReducer,
    selectedCut: selectedCutReducer
});
export default rootReducer;