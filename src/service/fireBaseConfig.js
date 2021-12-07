// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7d6JaRAjWG3qQbMS0w6K7M5Nb5jhbSK4",
    authDomain: "busco-libro-app.firebaseapp.com",
    projectId: "busco-libro-app",
    storageBucket: "busco-libro-app.appspot.com",
    messagingSenderId: "478233198827",
    appId: "1:478233198827:web:668b12ee3e35bca2873eae",
    measurementId: "G-G19YFYJX4T"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);


export function getFirestore() {
    return firebase.firestore(app)
}

export const auth = firebase.auth();