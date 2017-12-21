import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyCCeIGnoTmIeq75smT2KCIiLvLi3YW178w',
    authDomain: 'tictactoe-svo.firebaseapp.com',
    databaseURL: 'https://tictactoe-svo.firebaseio.com',
    projectId: 'tictactoe-svo',
    storageBucket: 'tictactoe-svo.appspot.com',
    messagingSenderId: '480035258002'
    };
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();