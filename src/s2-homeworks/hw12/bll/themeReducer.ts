import {combineReducers, legacy_createStore as createStore} from 'redux'

const initState = {
    themeId: 1
}



type SetThemeIdActionType = {
    type: "SET_THEME_ID",
    id: number
}

export const themeReducer = (state = initState, action: SetThemeIdActionType) => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdActionType => ({ type: 'SET_THEME_ID', id})




