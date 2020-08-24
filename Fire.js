import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyBk1Lga6VRH3LlJg3htO68d4STlXOCZzZQ",
 authDomain: "react-native-firebase-5c8d9.firebaseapp.com",
 databaseURL: "https://react-native-firebase-5c8d9.firebaseio.com",
 projectId: "react-native-firebase-5c8d9",
 storageBucket: "react-native-firebase-5c8d9.appspot.com",
 messagingSenderId: "632853872579",
 appId: "1:632853872579:web:f928fd799029cee9a0c776",
 measurementId: "G-Y76HH4TCD7"
};



const initializeApp = firebase.initializeApp(firebaseConfig)

const dbh = firebase.firestore();

dbh.collection("characters").doc("mario").set({
 employment: "plumber",
 outfitColor: "red",
 specialAttack: "fireball"
})


export default initializeApp;