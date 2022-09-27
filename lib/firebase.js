import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGYQyoB_ohOYhVjwS59HmhIfwfv74fc7Y",
    authDomain: "nextblog-32ba9.firebaseapp.com",
    projectId: "nextblog-32ba9",
    storageBucket: "nextblog-32ba9.appspot.com",
    messagingSenderId: "286246581040",
    appId: "1:286246581040:web:ef1b3198929cbe8aad0ef5",
    measurementId: "G-XPDZ3W9QM6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();