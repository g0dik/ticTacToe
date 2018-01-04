import { SET_CELLS_BG_VALUES, SET_TIMER_ENABLED, SET_TIMER_VALUES,CLEAR_TIMER} from '../actions';
import CUSTOM_STYLE from '../data/customStyle'

const initialState = {
    timerEnabled: false,
    timerValues: [],
    bgValues: [CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL,
                CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL, 
                CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL, CUSTOM_STYLE.COLORS.CELL ]
}

export default function timer (state = initialState, action){
    switch ( action.type ){
        case 'SET_CELLS_BG_VALUES': 
            return { ...state, bgValues: [...action.bgValues] }
        case 'SET_TIMER_ENABLED': 
            return { ...state, timerEnabled: action.timerEnabled }
        case 'SET_TIMER_VALUES': {
            var t = [...action.values]
            return { ...state, timerValues: t }  
            };       
        case 'CLEAR_TIMER': return {...initialState};
        default: return state;
    }   
}