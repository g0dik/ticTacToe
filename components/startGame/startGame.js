import React, { Component } from 'react';
import StartGameView from './startGameView';
import {connect} from 'react-redux';

class StartGame extends Component {

    render() {
        return (
            <StartGameView navigation = {this.props.navigation} lang = {this.props.lang}/>
        );
    };
};

export default connect(
    state => ({
        lang: state.app.lang
    }),
    dispatch => ({
    })
)(StartGame)