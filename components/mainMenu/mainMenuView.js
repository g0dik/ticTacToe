import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Picker,
    Animated,
    Easing,
    Image,
    BackHandler
  } from 'react-native';
import Styles from './mainMenuStyles'
import Data from '../../data/lang'

import Icon from 'react-native-vector-icons/Feather';

export default class MainMenuView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {Styles.container}>
                <View style = {Styles.header}>
                    <View style = {Styles.headerLeft}>
                        <Icon name="slack" 
                            size={40} 
                            color = 'white'
                            style = {Styles.headerLeftIcon}/>
                    </View>
                    <View style = {Styles.headerCenter}>
                        <Text style = {Styles.headerTitle}>
                            {Data[this.props.lang].headerTitle} 
                        </Text>
                        <Text style = {Styles.headerSubTitle}>
                            {Data[this.props.lang].headerSubTitle} 
                        </Text>
                    </View>
                    <View style = {Styles.headerRigth}>
                        <TouchableOpacity
                            onPress = {() => this.props.changeLang('EN')}   
                        >
                            <Image
                                style={Styles.icon}
                                source={require('../../data/icons/lang/EN.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {() => this.props.changeLang('RU')}   
                        >
                            <Image
                                style={Styles.icon}
                                source={require('../../data/icons/lang/RU.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {() => this.props.changeLang('UA')}   
                        >
                            <Image
                                style={Styles.icon}
                                source={require('../../data/icons/lang/UA.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {Styles.body}>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => {
                            this.props.onReset('all')
                            navigate('StartGame')
                            }}> 
                        <Icon name='play'
                            size={34} 
                            color = 'white'
                            style = {Styles.buttonTextIcon}/> 
                        <Text 
                        style={Styles.buttonText}
                        >
                            {Data[this.props.lang].mainMenuStart}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => navigate('StartNetGame')}>  
                        <Icon name='cast' 
                            size={34} 
                            color = 'white'
                            style = {Styles.buttonTextIcon}/> 
                        <Text 
                        style={Styles.buttonText}
                        >
                            {Data[this.props.lang].mainMenuStartNet}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => navigate('WinnersList')}> 
                        <Icon name='list' 
                            size={34} 
                            color = 'white'
                            style = {Styles.buttonTextIcon}/> 
                        <Text 
                        style={Styles.buttonText}
                        >
                            {Data[this.props.lang].mainMenuWinners}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => navigate('Settings')}> 
                        <Icon name='settings' 
                            size={34} 
                            color = 'white'
                            style = {Styles.buttonTextIcon}/> 
                        <Text 
                        style={Styles.buttonText}
                        >
                            {Data[this.props.lang].mainMenuSettings}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => BackHandler.exitApp()}> 
                        <Icon name='log-out' 
                            size={34} 
                            color = 'white'
                            style = {Styles.buttonTextIcon}/> 
                        <Text 
                        style={Styles.buttonText}
                        >
                            {Data[this.props.lang].mainMenuExit}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};