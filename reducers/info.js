import { CHANGE_INFO_TEXT } from '../actions'
import Data from '../data/lang'

const initialState = ""

export default function info (state = initialState, action){
    
    let massOfCellsNames = (Data[action.lang]) ? (Data[action.lang].massOfCellsNames) : ([]),
        inputX = (Data[action.lang]) ? (Data[action.lang].inputInfoX) : (''),
        inputY = (Data[action.lang]) ? (Data[action.lang].inputInfoY) : (''),
      temp ='';

    if (action.type === CHANGE_INFO_TEXT) {
        if (action.key === -1){
            return action.text
        } else {
            if (action.text !== 2) {
                temp = action.playerName + inputX;
            } else {
                temp = action.playerName + inputY;
            }
            temp += massOfCellsNames[action.key];
            return temp; 
                
        }
    }
    
    return state 
}