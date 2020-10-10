import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD85vmO1jyGFi6ceMrJgn8zRykv5ITCv_k",
    authDomain: "challenge-1fd73.firebaseapp.com",
    databaseURL: "https://challenge-1fd73.firebaseio.com",
    projectId: "challenge-1fd73",
    storageBucket: "challenge-1fd73.appspot.com",
    messagingSenderId: "104653782758",
    appId: "1:104653782758:web:b9ba134c310c5f37114527",
    measurementId: "G-5329XG7P0K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};