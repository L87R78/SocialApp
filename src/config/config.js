import firebase from 'firebase';

 const DB_CONFIG = {
    apiKey: "AIzaSyDFtFSywiZ3BJ9KSxLEfOgRjmnmqsRfxCg",
    authDomain: "react-notes-61e38.firebaseapp.com",
    databaseURL: "https://react-notes-61e38.firebaseio.com",
    projectId: "react-notes-61e38",
    storageBucket: "",
    messagingSenderId: "72182355328",
    appId: "1:72182355328:web:35ff3ba8f20ca05c4fdd65"
};

const fire = firebase.initializeApp(DB_CONFIG);
export default fire;



