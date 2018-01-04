import {SHOW_GAMES_LIST, 
        SET_TEMP_VALUE, 
        GET_LIST_FROM_FIRE_BASE, 
        SET_FIREBASE_WINNER_INFO,
        SET_LANGUAGE,
        CHANGE_TMP,
        CLEAR_LIST_FIRE_BASE } from '../actions'
import { database } from '../firebase.js'

const initialState = {
    lang: 'RU',
    showGamesList: false,
    temp:false,
    listData: null
}

export default function app (state = initialState, action){
    var time = Date.now()
    switch ( action.type ){
        case 'SHOW_GAMES_LIST': 
            return {...state, showGamesList:action.value };
        case 'SET_TEMP_VALUE': 
            return {...state, temp:action.value }; 
        case 'GET_LIST_FROM_FIRE_BASE':     
            return {...state, listData: action.data }
        case 'CLEAR_LIST_FIRE_BASE':
            return {...state, listData: null }
        case 'SET_LANGUAGE':
            return {...state, lang: action.lang}
        case 'CHANGE_TMP':
            return {...state, temp: action.value}
        case 'SET_FIREBASE_WINNER_INFO':{
            database.ref('/Games/'+time+'/firstName').set(action.firstName)
            database.ref('/Games/'+time+'/secondName').set(action.secondName)
            database.ref('/Games/'+time+'/winner').set(action.winner)
            database.ref('/Games/'+time+'/date').set(action.date)
            return state
        }
        default: return state;
    }   
}