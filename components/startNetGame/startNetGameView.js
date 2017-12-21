import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './startNetGameStyle';
import NavBar from '../navBar/navBar';
import Data from '../../data/lang';

export default class StartNetGameView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {Styles.container}>
                <NavBar 
                    curStyles = {Styles.header}
                    navigation = {this.props.navigation}
                    text = {Data[this.props.lang].mainMenuStartNet}
                />
                <View style = {Styles.body}>

                </View>
            </View>
        );
    };
};