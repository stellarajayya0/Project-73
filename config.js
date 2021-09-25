import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA6JVZR-qMhEjDlmYs24-zCFpX-hYJenWs",
  authDomain: "storytellingapp-48385.firebaseapp.com",
  databaseURL: "https://storytellingapp-48385-default-rtdb.firebaseio.com",
  projectId: "storytellingapp-48385",
  storageBucket: "storytellingapp-48385.appspot.com",
  messagingSenderId: "925984926445",
  appId: "1:925984926445:web:3b36692ba7b29bef61fae4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   