import React, { Component } from 'react';
import WinnersListView from './winnersListView';
import {connect} from 'react-redux';
import { GET_LIST_FROM_FIRE_BASE, 
    SHOW_GAMES_LIST, 
    SET_TIMER_ENABLED } from '../../actions';
import { database } from '../../firebase';

class WinnersList extends Component {
    componentDidMount() {
        this.props.onGetListFromFireBase();
    }

    render() {
        
        return (
            <WinnersListView navigation = {this.props.navigation} 
                            lang = {this.props.app.lang} 
                            winData = {this.props.app.listData}/>
        );
    };
};

export default connect(
    state => ({
        app: state.app
    }),
    dispatch => ({
        onGetListFromFireBase: (data) => { 
            const getList = () =>{
                return dispatch => {
                    database.ref('/').on('value',(snapshot) => {
                        data = snapshot.val()
                        dispatch({ type: GET_LIST_FROM_FIRE_BASE, data})
                    })
                }
            }
            dispatch(getList())
        }
    })
)(WinnersList)