import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB46gMT_IVAM33tk5W_tpd3sHgRT7t0c4c",
    authDomain: "react-loginbox.firebaseapp.com",
    databaseURL: "https://react-loginbox.firebaseio.com",
    projectId: "react-loginbox",
    storageBucket: "",
    messagingSenderId: "829660141332",
    appId: "1:829660141332:web:ccb1b5048ac2d21c86d401"
  };

  const fire = firebase.initializeApp(config);
  export default fire;