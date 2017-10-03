
export const THEME_ACTIONS = {
    SET_CUT_SHEET_BG_COLOR: 'SET_CUT_SHEET_BG_COLOR',
    SET_DEFAULT_CUT_COLOR: 'SET_DEFAULT_CUT_COLOR',
    SET_DISABLED_CUT_COLOR: 'SET_DISABLED_CUT_COLOR',
    SET_SELECTED_CUT_COLOR: 'SET_SELECTED_CUT_COLOR',
    SET_HOVERED_CUT_COLOR: 'SET_HOVERED_CUT_COLOR',
    SET_CUT_STROKE_COLOR: 'SET_CUT_STROKE_COLOR',
    SET_TEXT_COLOR: 'SET_TEXT_COLOR'
}


export function setDefaultCutColor(color) {
    return {
        type: THEME_ACTIONS.SET_DEFAULT_CUT_COLOR,
        color
    }
}
export function setDisabledCutColor(color) {
    return {
        type: THEME_ACTIONS.SET_DISABLED_CUT_COLOR,
        color
    }
}

export function setSelectedCutColor(color) {
    return {
        type: THEME_ACTIONS.SET_SELECTED_CUT_COLOR,
        color
    }
}

export function setTextColor(color) {
    return {
        type: THEME_ACTIONS.SET_TEXT_COLOR,
        color
    }
}

export function setBackgroundColor(color) {
    return {
        type: THEME_ACTIONS.SET_CUT_SHEET_BG_COLOR,
        color
    }
}

export function setStrokeColor(color) {
    return {
        type: THEME_ACTIONS.SET_CUT_STROKE_COLOR,
        color
    }
}