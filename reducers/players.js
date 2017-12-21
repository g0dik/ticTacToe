import { SET_PLAYER_NAME , SET_ACTIVE_PLAYER_ID ,SET_PLAYERS_VALUE } from '../actions'

const initialState = {
    firstname: "First player",
    secondname: "Second Player",
    activePlayerId : 1,
    playersValues: [null,null,null,null,null,null,null,null,null]
}

export default function players (state = initialState, action){
    if (action.type === SET_PLAYER_NAME){
        if (action.playerID === 1){
            return Object.assign(state,{ firstname: action.playerName })
        } else if (action.playerID === 2){ 
            return Object.assign(state,{ secondname: action.playerName })
        }
    } else if (action.type === SET_ACTIVE_PLAYER_ID) {
        return Object.assign(state,{ activePlayerId: action.playerId })    
    } else if (action.type === SET_PLAYERS_VALUE) {
        var temp = [...state.playersValues]
        temp[action.playerId] = action.playerValue;
        return Object.assign(state,{ playersValues: temp })    
    }
    
    return state
}