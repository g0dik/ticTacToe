import { SET_CELL_COLVALUE, SET_TIMER_ENABLED, SET_TIMER_VALUES} from '../actions'

const initialState = {
    colValue: "yellow",
    timerEnabled: false,
    timerValues: []
}

export default function cell (state = initialState, action){
    if (action.type === SET_CELL_COLVALUE){
        return Object.assign(state,{ colValue: action.colValue})   
    } else if (action.type === SET_TIMER_ENABLED) {
        return Object.assign(state,{ timerEnabled: action.timerEnabled })    
    } else if (action.type === SET_TIMER_VALUES) {
        var t = [...action.values]
        return Object.assign(state,{ timerValues: t })    
    }
    
    return state
}