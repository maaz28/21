import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    // Taha Configuration *************
    apiKey: "AIzaSyBAX6wYJeZmhcd30rwMJepcMzymgKBHFb4",
    authDomain: "time-sc.firebaseapp.com",
    databaseURL: "https://time-sc.firebaseio.com",
    projectId: "time-sc",
    storageBucket: "time-sc.appspot.com",
    messagingSenderId: "743778984658"
  };
  firebase.initializeApp(config);

  export const db = firebase.database();
  export const auth = firebase.auth();