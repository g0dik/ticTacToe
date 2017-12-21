import { CHANGE_INFO_TEXT } from '../actions'

const initialState = "Game starting..."

export default function info (state = initialState, action){
    let massOfCellsNames = [
        'left top corner cell','center top cell','rigth top corner cell', 'left middle cell', 'center middle cell',
        'rigth middle cell','left bottom corner cell','center bottom cell','rigth bottom corner cell'
      ],
      temp ='';

    if (action.type === CHANGE_INFO_TEXT) {
        if (action.key === -1){
            return action.text
        } else {
            if (action.text !== 2) {
                temp = action.playerName + ' input X into ';
            } else {
                temp = action.playerName + ' input O into ';
            }
            temp += massOfCellsNames[action.key];
            return temp; 
                
        }
    }
    
    return state 
}