import { SET_PLAYER_NAME , SET_ACTIVE_PLAYER_ID ,SET_PLAYERS_VALUE, RESET_PLAYER_DATA } from '../actions'

const initialState = {
    firstname: "",
    secondname: "",
    activePlayerId : 1,
    playersValues: [null,null,null,null,null,null,null,null,null]
}

export default function players (state = initialState, action){
    switch ( action.type ){
        case 'SET_PLAYER_NAME': { 
            if (action.playerID === 1){
                return {...state, firstname: action.playerName }
            } else if (action.playerID === 2){ 
                return {...state, secondname: action.playerName }
            }          
        };
        case 'SET_ACTIVE_PLAYER_ID': 
            return {...state, activePlayerId: action.playerId }; 
        case 'RESET_PLAYER_DATA': {
            var temp = [null,null,null,null,null,null,null,null,null];
            if (action.key === 'all') {
                return {...initialState }
            }
            if (action.key === 'game') {
                return { ...state, playersValues:temp,
                                   activePlayerId : 1 }
            }
                return state;
            }
        case 'SET_PLAYERS_VALUE': { 
            var temp = [...state.playersValues]
            temp[action.playerValue] = action.playerId;
            return {...state, playersValues: temp }
        }; 
        default: return state;
    }   
}