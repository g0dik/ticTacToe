import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './navBarStyles';
import Icon from 'react-native-vector-icons/Feather';

export default class NavBar extends Component {

    render() {        
        const { navigate } = this.props.navigation;
        return (
            <View style = {this.props.curStyles}>
                <View style = {Styles.headerLeft}>
                    <TouchableOpacity 
                        onPress={() => {
                            (this.props.reset === true) ? (this.props.onReset()) : (null)
                            navigate('Home')
                            }}
                    >
                        <Icon name="chevrons-left" 
                            size={34} 
                            color = 'white'
                            style = {Styles.headerBackIcon}/>
                    </TouchableOpacity>
                </View>
                <View style = {Styles.headerCenter}>
                    <Text style = {Styles.headerText}>{this.props.text}</Text>
                </View>
                <View style = {Styles.headerRight}>

                </View>
            </View>
        );
    };
};