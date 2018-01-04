import React, { Component } from 'react';
import StartGameView from './startGameView';
import {connect} from 'react-redux';
import { SET_PLAYER_NAME, 
         SET_PLAYERS_VALUE, 
         SET_ACTIVE_PLAYER_ID,
         RESET_PLAYER_DATA,
         CHANGE_INFO_TEXT,
         SET_CELL_CLICK_COUNT,
         SET_CLICK_ENABLED,
         SET_TIMER_ENABLED,
         SET_TIMER_VALUES,
         SET_CELLS_BG_VALUES,
         CLEAR_TIMER,
         SET_FIREBASE_WINNER_INFO } from '../../actions';
import CUSTOM_STYLE from '../../data/customStyle';
import Data from '../../data/lang';

class StartGame extends Component {    
    GetFirstValue(Value) {
        this.props.onSetPlayerName(Value,1)
    }
    GetSecondValue(Value) {
        this.props.onSetPlayerName(Value,2)
    }

    analiz ( a, b, c,mass) {
        var tempString;
        const date = (new Date()).toLocaleString()
        
        tempString = mass[a] +"" + 
                     mass[b] +"" +
                     mass[c] +"";
        
        if (tempString.length === 3) {
          if (tempString === '111') {
                this.props.onClickEnabled(false);
                this.props.onSetFireBaseWinnerInfo(this.props.players.firstname,
                                                   this.props.players.secondname,
                                                   1,
                                                   date)
                this.props.onChangeInfoText(-1,this.props.players.firstname + Data[this.props.lang].wins)
            return 1;
            } else if (tempString === '222') {
                this.props.onClickEnabled(false);
                this.props.onSetFireBaseWinnerInfo(this.props.players.firstname,
                                                   this.props.players.secondname,
                                                   2,
                                                   date)
                this.props.onChangeInfoText(-1,this.props.players.secondname + Data[this.props.lang].wins)
                return 2;
            } else {
                return 0;
            }
        } else {
          return 0;
        }
    }

    ClickCell(cellID) {
        var massOfAnalizIndex = [
            [ 0, 1, 2],
            [ 3, 4, 5],
            [ 6, 7, 8],
            [ 0, 3, 6],
            [ 1, 4, 7],
            [ 2, 5, 8],
            [ 0, 4, 8],
            [ 2, 4, 6]
          ],
        playersValues = [...this.props.players.playersValues];
        clickCount = this.props.clickCount;

        this.props.onCellClickCount();

        playersValues[cellID] = this.props.players.activePlayerId;
        this.props.onSetPlayersValue(this.props.players.activePlayerId,cellID);

        (this.props.players.activePlayerId === 1) ? (this.props.onSetPlayerId(2)) :
            (this.props.players.activePlayerId === 2) ? (this.props.onSetPlayerId(1)) :(null);

        //Проверка на наличие выигравшей комбинации
      
        var find = false;
         
        for (var j = 0; j < massOfAnalizIndex.length; j++) {
            if (this.analiz ( massOfAnalizIndex[j][0], massOfAnalizIndex[j][1], massOfAnalizIndex[j][2],playersValues) !== 0) {
                find = true;
                this.props.onSetTimerEnabled(true)
                this.props.onSetTimerValues([massOfAnalizIndex[j][0], massOfAnalizIndex[j][1], massOfAnalizIndex[j][2]])
                break;
            }}
 
        if ( find === false ){
            this.props.onChangeInfoText(cellID,this.props.players.activePlayerId,
                (this.props.players.activePlayerId === 1) ? (this.props.players.firstname) :
                    (this.props.players.secondname), this.props.lang);
            if (clickCount=== 8){
                this.props.onClickEnabled(false);
                this.props.onSetFireBaseWinnerInfo(this.props.players.firstname,
                    this.props.players.secondname,
                    0,
                    (new Date()).toLocaleString())
                this.props.onChangeInfoText(-1,Data[this.props.lang].noWins)
            }
        }
        
    }
    componentDidMount() {
        this.props.onChangeInfoText(-1,Data[this.props.lang].gameStarting);   
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
      }

    SetTimer(value) {
        var temp = [...this.props.timer.bgValues];
        for(var j = 0; j < temp.length; j++){
            if ( this.props.timer.timerValues.indexOf(j) !== -1 ) {
                if (temp[j] === CUSTOM_STYLE.COLORS.CELL ) {
                    (temp[j] = CUSTOM_STYLE.COLORS.CELLWIN1)
                } else if ( temp[j] === CUSTOM_STYLE.COLORS.CELLWIN1 ) {
                        ( temp[j] = CUSTOM_STYLE.COLORS.CELLWIN2 )
                    } else {
                        ( temp[j] = CUSTOM_STYLE.COLORS.CELLWIN1 )
                    }
            }
        }
        this.props.onSetBgValues(temp)
    }
    render() {
        (this.props.timer.timerEnabled === true) ? 
        (this.SetTimer()) :
        (null)
        return (
            <StartGameView navigation = {this.props.navigation} lang = {this.props.lang} 
            firstName = {this.props.players.firstname}
            secondName = {this.props.players.secondname} 
            playersValues = {this.props.players.playersValues}
            getFirstValue = {this.GetFirstValue.bind(this)}
            getSecondValue = {this.GetSecondValue.bind(this)}
            clickCell = {this.ClickCell.bind(this)}
            infoText = {this.props.info}
            onResetGame = {(key) => {
                        this.props.onCellClickCount('clear')
                        this.props.onSetTimerEnabled(false);
                        this.props.onClearTimer()
                        this.props.onClickEnabled(true)
                        this.props.onResetGame(key)
                    }
                }
            clickEnabled = {this.props.clickEnabled}
            bgColors = {this.props.timer.bgValues}
            />
        );
    };
};

export default connect(
    state => ({
        players: state.players,
        lang: state.app.lang,
        info: state.info,
        temp: state.app.temp,
        clickCount: state.cell.clickCount,
        clickEnabled: state.cell.clickEnabled,
        timer: state.timer,
    }),
    dispatch => ({
        onSetPlayerName: (playerName, playerID) => {
            dispatch({ type: SET_PLAYER_NAME, playerName , playerID})
        },
        onSetPlayersValue: (playerId, playerValue) => {
            dispatch({ type: SET_PLAYERS_VALUE, playerId, playerValue})
        },
        onSetPlayerId: (playerId) => {
            dispatch({ type: SET_ACTIVE_PLAYER_ID, playerId})
        },
        onResetGame: (key) => {
            dispatch({ type: RESET_PLAYER_DATA, key})
        },
        onChangeInfoText: (key, text, playerName, lang) => {
            dispatch({ type: CHANGE_INFO_TEXT, key, text, playerName, lang})
        },
        onCellClickCount: (key) => {
            dispatch({ type: SET_CELL_CLICK_COUNT, key})
        },
        onClickEnabled: (clickEnabled) => {
            dispatch({ type: SET_CLICK_ENABLED, clickEnabled})
        },
        onSetTimerEnabled: (timerEnabled) => {
            dispatch({ type:SET_TIMER_ENABLED, timerEnabled})
        },
        onSetTimerValues: (values) => {
            dispatch({ type: SET_TIMER_VALUES, values})
        },
        onSetBgValues: (bgValues,timerEnabled) => {
            const setTimer = ()  => {
                return dispath => {
                    this.timer = setTimeout(
                        () => { 
                            dispatch({ type: SET_CELLS_BG_VALUES, bgValues}) 
                        }
                        ,500
                    )
                }
            }
            dispatch(setTimer())
        },
        onClearTimer: () => {
            const clear = () => {
                return dispatch => {
                    this.timer = setTimeout(
                        () => {
                            dispatch({ type: CLEAR_TIMER})
                        }
                        ,600
                    )
                }
            }
            dispatch(clear())
        },
        onSetFireBaseWinnerInfo: (firstName, secondName, winner, date) => {
            dispatch({ type: SET_FIREBASE_WINNER_INFO, firstName, secondName, winner, date})
        },
        
    })
)(StartGame)