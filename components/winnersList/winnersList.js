import React, { Component } from 'react';
import WinnersListView from './winnersListView';
import {connect} from 'react-redux';
import { GET_LIST_FROM_FIRE_BASE, 
    SHOW_GAMES_LIST, 
    SET_TIMER_ENABLE,
    CLEAR_LIST_FIRE_BASE } from '../../actions';
import { database } from '../../firebase';

class WinnersList extends Component {
    componentWillMount() {
        this.props.onGetListFromFireBase('run');
    }

    render() {
        return (
            <WinnersListView navigation = {this.props.navigation} 
                            lang = {this.props.app.lang} 
                            winData = {this.props.app.listData}
                            claerList = {this.props.clearListDataBase.bind(this)}
                            />
        );
    };
};

export default connect(
    state => ({
        app: state.app
    }),
    dispatch => ({
        onGetListFromFireBase: (key,data) => { 
            const getList = () =>{
                return dispatch => {
                    database.ref('/').on('value',(snapshot) => {
                        if (key === 'run') {  
                            key = '';                   
                            data = {...snapshot.val()}
                            dispatch({ type: GET_LIST_FROM_FIRE_BASE, data})
                        }
                    })
                }
            }
            dispatch(getList())
        },
        clearListDataBase: () => {
            dispatch({ type: CLEAR_LIST_FIRE_BASE})  
        }
    })
)(WinnersList)