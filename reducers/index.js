import { combineReducers } from 'redux'
import players from './players.js'
import info from './info.js'
import cell from './cell.js'
import timer from './timer.js'
import app from './app.js'

export default combineReducers({
    players,
    info,
    cell,
    timer,
    app
})