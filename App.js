// Fonts Android
// normal
// notoserif
// sans-serif
// sans-serif-light
// sans-serif-thin
// sans-serif-condensed
// sans-serif-medium
// serif
// Roboto
// monospace

// git init
// git add *
// git commit -m "Name Commit"
// git status
// git remote add origin https://github.com/g0dik/ticTacToe.git
// git push -u origin master

// echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && watchman shutdown-server && sudo sysctl -p
// cd /media/g0dik/EXCHANGE/ReactNative/ticTacToe/
// react-native start
// /home/g0dik/Android/Sdk/tools/emulator -avd reactnative -qemu -m 2047 -enable-kvm
// react-native run-android
<script src="http://localhost:8097"></script>

import React, { Component } from 'react';
import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider }  from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { createLogger } from 'redux-logger'

import MainMenu from './components/mainMenu/mainMenu'
import StartGame from './components/startGame/startGame'
import StartNetGame from './components/startNetGame/startNetGame'
import WinnersList from './components/winnersList/winnersList'
import Settings from './components/settings/settings'

const AppNavigator = StackNavigator({
        Home: { screen: MainMenu },
        StartGame: { screen: StartGame },
        StartNetGame: { screen: StartNetGame },
        WinnersList: { screen: WinnersList },
        Settings: { screen: Settings },
      },
    {
      headerMode: 'none',
      transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
   
          const height = layout.initHeight;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });
   
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
   
          return { opacity, transform: ([{ translateX }]) };
        },
      }),
    },
  );

const loggerMiddleware = createLogger({ predicate: ( getState, action ) => __DEV__ });  

const enhancer = compose(
  applyMiddleware(
    thunk,
    loggerMiddleware,
  )
)
const store = createStore(reducer , enhancer);
const dispatch = store.dispatch;

store.dispatch = action => {
    if (typeof action === 'function') {
        return action(dispatch)
    }

    return dispatch(action)
}

export default class App extends Component {
  render() {
    return (     
      <Provider store = {store}>
        <AppNavigator/>
      </Provider>
    );
  }

};