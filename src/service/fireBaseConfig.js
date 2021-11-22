// Import the functions you need from the SDKs you need
import firebase  from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    // --> cuando haga el deploid voy a usar el env.local
    // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_FIREBASE_APPID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID

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

//agregando funciones
export function getFirestore() {
    return firebase.firestore(app)
}
