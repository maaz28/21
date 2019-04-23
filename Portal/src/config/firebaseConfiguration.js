import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    // Maaz Congif ******
    // apiKey: "AIzaSyDQXGbQKIAXgTGzGcknu8Xj9yRqTogZaHs",
    // authDomain: "demoproject-53326.firebaseapp.com",
    // databaseURL: "https://demoproject-53326.firebaseio.com",
    // projectId: "demoproject-53326",
    // storageBucket: "demoproject-53326.appspot.com",
    // messagingSenderId: "133645204315"
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