import React, { Component } from 'react';
import MainMenuView from './mainMenuView'
import { connect } from 'react-redux'
import { SET_LANGUAGE, RESET_PLAYER_DATA, SET_CLICK_ENABLED, CLEAR_TIMER, SET_TIMER_ENABLED } from '../../actions'
import { View, StatusBar} from 'react-native'

class MainMenu extends Component {

    render() {
        return (
            <View style = {{flex:1}}>
                <StatusBar hidden = {true}/>
                <MainMenuView   navigation  = {this.props.navigation}
                                lang = {this.props.lang}
                                changeLang = { (lang) => this.props.onChangeLang(lang)}
                                onReset = {(key) => this.props.onReset(key)}
                                />
            </View>
        );
    };
};

export default connect(
    state => ({
        lang: state.app.lang
    }),
    dispatch => ({
        onChangeLang: (lang) => {
            dispatch({ type: SET_LANGUAGE, lang})
        },
        onReset: (key) => {
            dispatch({ type: RESET_PLAYER_DATA, key})
        },

    }),
)(MainMenu)