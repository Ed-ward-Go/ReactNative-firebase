import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyClUMjd4Y--jGhcRqMGYKThKEWGolu-weo",
    authDomain: "react-native-firebase-1b67f.firebaseapp.com",
    databaseURL: "https://react-native-firebase-1b67f.firebaseio.com",
    projectId: "react-native-firebase-1b67f",
    storageBucket: "react-native-firebase-1b67f.appspot.com",
    messagingSenderId: "824294506775",
    appId: "1:824294506775:web:80c7c75f9906a8f2357752"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db,
  }