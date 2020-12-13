import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD2Ug1swHl0s8anYSAniHzpm-viFVEd2Go",
    authDomain: "new-test-mvp.firebaseapp.com",
    databaseURL: "https://new-test-mvp.firebaseio.com",
    projectId: "new-test-mvp",
    storageBucket: "new-test-mvp.appspot.com",
    messagingSenderId: "804359459796",
    appId: "1:804359459796:web:241d4d2e23d3f6fd207c41"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.Timestamp;
