import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './winnersListStyles';
import NavBar from '../navBar/navBar';
import Data from '../../data/lang';

export default class WinnersListView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {Styles.container}>
                <NavBar 
                    curStyles = {Styles.header}
                    navigation = {this.props.navigation}
                    text = {Data[this.props.lang].mainMenuWinners}
                />
                <View style = {Styles.body}>

                </View>
            </View>
        );
    };
};