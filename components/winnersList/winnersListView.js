import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styles from './winnersListStyles';
import NavBar from '../navBar/navBar';
import Data from '../../data/lang';

export default class WinnersListView extends Component {

    render() {
        const { navigate } = this.props.navigation;
        const listData = (this.props.winData !== null)&(this.props.winData !== undefined) 
                            ? (this.props.winData).Games
                            : ({"0000000000123": {firstName: '', secondName: '', date: '', winner: 1}})
        return (
            <View style = {Styles.container}>
                <NavBar 
                    curStyles = {Styles.header}
                    navigation = {this.props.navigation}
                    text = {Data[this.props.lang].mainMenuWinners}
                    onReset = {this.props.claerList}
                    reset = {true}
                />
                <View style = {Styles.body}>
                    <View style = {Styles.listHeader}>
                        <View style = {Styles.listHeaderRight}>
                            <Text style = {Styles.listHeaderText}>{Data[this.props.lang].winListHeaderPlayerName}</Text>
                        </View>
                        <View style = {Styles.listHeaderLeft}>
                            <Text style = {Styles.listHeaderText}>{Data[this.props.lang].winListHeaderDateTime}</Text>
                        </View>
                    </View>
                    <View style = {Styles.list}>
                        <ScrollView style = {Styles.listScroll}>
                            {Object.getOwnPropertyNames(listData).map(r => (
                                <View key = {r} style = {Styles.listItem}>
                                    <View style = {Styles.listPlayers}>
                                        <Text style = {(listData[r].winner === 1) ? (Styles.w1) : (Styles.uw1)}>
                                            {listData[r].firstName}
                                        </Text>
                                        <Text style = {Styles.listVs}> vs </Text> 
                                        <Text style = {(listData[r].winner === 2) ? (Styles.w2) : (Styles.uw2)}>
                                            {listData[r].secondName}
                                        </Text>
                                    </View>
                                    <Text style = {Styles.listDate}>
                                        { ((((listData[r].date).replace(', ',' ')).replace(' PM','')).replace(' AM','')).replace('/20','/').substr(0,(
                                            ((((listData[r].date).replace(', ',' ')).replace(' PM','')).replace(' AM','')).replace('/20','/')).length  
                                            -3)
                                        }
                                    </Text>            
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    };
};