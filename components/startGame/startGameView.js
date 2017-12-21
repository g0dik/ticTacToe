import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './startGameStyles';
import NavBar from '../navBar/navBar';
import Data from '../../data/lang';

export default class StartGameView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {Styles.container}>
                <NavBar 
                    curStyles = {Styles.header}
                    navigation = {this.props.navigation}
                    text = { Data[this.props.lang].mainMenuStart }
                />
                <View style = {Styles.body}>

                </View>
            </View>
        );
    };
};