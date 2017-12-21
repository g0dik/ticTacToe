import React, { Component } from 'react';
import MainMenuView from './mainMenuView'
import { connect } from 'react-redux'
import { SET_LANGUAGE } from '../../actions'

class MainMenu extends Component {

    render() {
        return (
            <MainMenuView   navigation  = {this.props.navigation}
                            lang = {this.props.lang}
                            changeLang = { (lang) => this.props.onChangeLang(lang)}
                            />
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
        }
    })
)(MainMenu)