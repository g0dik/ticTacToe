import { SET_CELL_BACKGROUND , SET_CELL_CLICK_COUNT ,SET_CLICK_ENABLED } from '../actions'

const initialState = {
    clickEnabled: true,
    clickCount: 0,
    backgroundsValues: ["#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f","#8f8f8f"]
}

export default function cell (state = initialState, action){
    switch ( action.type ){
        case 'SET_CELL_BACKGROUND': { 
            var temp = [...state.backgroundsValues];
            t[action.key] = action.bgValue;
            return {...state, backgroundsValues: t}     
        };
        case 'SET_CELL_CLICK_COUNT': {
            var l = state.clickCount;
            l++
            if (action.key === 'clear') {
                return { ...state, clickCount: 0 } 
            } else {
                return { ...state, clickCount: l } 
            }
            
        };
        case 'SET_CLICK_ENABLED': {
            return { ...state, clickEnabled: action.clickEnabled }    
            }

        default: return state;
    } 
}