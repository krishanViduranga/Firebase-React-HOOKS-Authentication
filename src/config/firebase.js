import firebase from "firebase";

var firebaseConfig = {
  apiKey: "ASzaSyD1UqTY_ias5sJ9st7cUqY2KewZJF-ySpk",
  authDomain: "locater-bf776.firebaseapp.com",
  databaseURL: "https://locater-bf776.firebaseio.com",
  projectId: "locater-bf776",
  storageBucket: "locater-bf776.appspot.com",
  messagingSenderId: "671589560391",
  appId: "1:671589560391:web:9aa38067704605260a8162",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
