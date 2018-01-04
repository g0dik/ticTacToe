import React, { Component } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import Styles from './startGameStyles';
import NavBar from '../navBar/navBar';
import Data from '../../data/lang';
import InputPromView from '../inputProm/inputPromView';
import ShowHideView from '../../animations/showHideView';
import XOAnimView from '../../animations/xoAnimView';


export default class StartGameView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0,
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        var cellMass = [0,1,2,3,4,5,6,7,8]
        cellMass = cellMass.map((k) => { return <TouchableOpacity 
                style = {[Styles.gameGridCell,{width: (this.state.width-6*4-3)/3,
                                            height: (this.state.height-6*4-3)/3,
                                            backgroundColor: this.props.bgColors[k] }]}
                key = {k}
                disabled = {!this.props.clickEnabled}
                onPress = {(this.props.playersValues[k] === null) ? () => this.props.clickCell(k+'') : (null)}>
                {(this.props.playersValues[k] !== null) ? (<XOAnimView key = {k} player = {this.props.playersValues[k]} bgColor = {this.props.bgColors[k]}/>) : (null)}
            </TouchableOpacity>

        })
        return (
            <View style = {Styles.container} onLayout = {(e)=>{
                let {width, height} = e.nativeEvent.layout
                let maxVal = Math.min(width,height)-18
                if (maxVal) {
                    this.setState({ height: maxVal, width: maxVal})
                }
            }}>
                {(this.props.firstName === '') ?
                    (<ShowHideView key = {1}>
                        <InputPromView
                            textValue = {Data[this.props.lang].promFirstNameLabel}
                            inputDefaultValue = {Data[this.props.lang].promFirstNameDefValue}
                            error = {Data[this.props.lang].promError}
                            onGetValue = {this.props.getFirstValue}
                        />
                    </ShowHideView>) :
                    (this.props.secondName === '') ?
                    (<ShowHideView key = {2}>
                        <InputPromView
                            textValue = {Data[this.props.lang].promSecondNameLabel}
                            inputDefaultValue = {Data[this.props.lang].promSecondNameDefValue}
                            error = {Data[this.props.lang].promError}
                            onGetValue = {this.props.getSecondValue}
                        />
                    </ShowHideView>) :
                    (<ShowHideView key = {3} style = {{flex: 1}}>
                        <NavBar 
                            curStyles = {Styles.header}
                            navigation = {this.props.navigation}
                            text = { Data[this.props.lang].gameHeader }
                            onReset = {() => this.props.onResetGame('game')}
                            reset = {true}
                        />
                        <View style = {Styles.body}>
                            <View style = {[Styles.gameGrid,{height: this.state.height , 
                                                             width: this.state.width}]}>
                                {cellMass}
                            </View>
                            <TouchableOpacity 
                                        style = {Styles.reset}
                                        onPress = {() => this.props.onResetGame('game')}
                                        >
                                <Text style = {Styles.resetText}>{Data[this.props.lang].reset}</Text>
                            </TouchableOpacity> 
                            <View style = {[Styles.info,{width: this.state.width}]}>
                                <Text style = {Styles.infoText}>{this.props.infoText}</Text>
                            </View>

                        </View>
                    </ShowHideView>)
                }
            </View>
        );
    };
};