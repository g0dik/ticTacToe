import React, { Component } from 'react';
import SettingsView from './settingsView'
import {connect} from 'react-redux'

class Settings extends Component {

    render() {
        return (
            <SettingsView navigation = {this.props.navigation} lang = {this.props.lang}/>
        );
    };
};

export default connect(
    state => ({
        lang: state.app.lang
    }),
    dispatch => ({
    })
)(Settings)