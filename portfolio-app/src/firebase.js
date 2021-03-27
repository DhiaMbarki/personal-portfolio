import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({


    apiKey: "AIzaSyA5Dyxcapagmvw0hwCauFD8rly0Z5er2t4",
    authDomain: "informations-portfolio.firebaseapp.com",
    projectId: "informations-portfolio",
    storageBucket: "informations-portfolio.appspot.com",
    messagingSenderId: "1002285814279",
    appId: "1:1002285814279:web:9332e55c4a8b1d58b110a2"
  
 
})


var db = firebaseApp.firestore();

export {db};