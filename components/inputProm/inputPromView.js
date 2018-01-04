import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import Styles from './inputPromStyles';

export default class InputPromView extends Component {
    componentDidMount(){
        setTimeout(()=>{this.refs.TI.focus()},100)     
    }
    componentWillUnmount(){
        this.refs.TI.clear()
    }
    render() {
        return (
            <View style = {Styles.input}>
                <Text style = {Styles.inputText}>
                    {this.props.textValue}
                </Text>
                <TextInput
                    ref = 'TI'
                    blurOnSubmit  = {true}
                    placeholderTextColor = 'red'
                    placeholder = {this.props.error}
                    defaultValue = {this.props.inputDefaultValue}
                    selectTextOnFocus = {true}
                    selectionColor = {'grey'}
                    maxLength = {20}
                    underlineColorAndroid = 'white'
                    style = {Styles.inputTextInput}
                    onSubmitEditing = {
                        (e) => {
                            this.refs.TI.blur()
                            this.props.onGetValue(e.nativeEvent.text);
                        }
                    }
                />
            </View>
        );
    };
};