import { SET_CELL_BACKGROUND , SET_CELL_CLICK_COUNT ,SET_CLICK_ENABLED } from '../actions'

const initialState = {
    clickEnabled: true,
    clickCount: 0,
    backgroundsValues: ["#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f"]
}

export default function cell (state = initialState, action){
    if (action.type === SET_CELL_BACKGROUND){
        var t = [...state.backgroundsValues]
        t[action.key] = action.bgValue;
        return Object.assign(state,{ backgroundsValues: t})   
    } else if (action.type === SET_CELL_CLICK_COUNT) {
        var l = state.clickCount;
        l++
        return Object.assign(state,{ clickCount: l })    
    } else if (action.type === SET_CLICK_ENABLED) {
        return Object.assign(state,{ clickEnabled: action.clickEnabled })    
    }
    
    return state
}