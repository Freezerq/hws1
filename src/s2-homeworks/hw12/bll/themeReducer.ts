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
            const copy = {
                ...state,
                themeId: action.id
            }
            // console.log(copy)
            return copy
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdActionType => ({ type: 'SET_THEME_ID', id})

export type AppStoreType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    theme: themeReducer
})


export const store = createStore(rootReducer)


