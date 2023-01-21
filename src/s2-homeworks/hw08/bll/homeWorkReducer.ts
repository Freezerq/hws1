import {UserType} from '../HW8'

type ActionType =
    | { type: 'SORT'; payload: 'up' | 'down' }
    | { type: 'CHECK'; payload: number }




export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    const copyArray = [...state].sort((a, b) => {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    })

    switch (action.type) {
        case 'SORT': { // by name
            if (action.payload === 'up') {
                return copyArray
            }
            if (action.payload === 'down') {
                return copyArray.reverse()
            }
        }
            return state
        case 'CHECK': {
            return [...state].filter(u => u.age > 17)
        }
        default:
            return state
    }
}
