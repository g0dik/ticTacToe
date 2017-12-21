import React, { Component } from 'react';
import WinnersListView from './winnersListView';
import {connect} from 'react-redux';

class WinnersList extends Component {

    render() {
        return (
            <WinnersListView navigation = {this.props.navigation} lang = {this.props.lang}/>
        );
    };
};

export default connect(
    state => ({
        lang: state.app.lang
    }),
    dispatch => ({
    })
)(WinnersList)