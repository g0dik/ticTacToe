import React, { Component } from 'react';
import StartNetGameView from './startNetGameView';
import {connect} from 'react-redux';

class StartNetGame extends Component {

    render() {
        return (
            <StartNetGameView navigation = {this.props.navigation}  lang = {this.props.lang}/>
        );
    };
};

export default connect(
    state => ({
        lang: state.app.lang
    }),
    dispatch => ({
    })
)(StartNetGame)