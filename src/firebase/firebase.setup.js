import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUk-tFqJUwe5qRWy-hXwGE02Ov76YenjM",
    authDomain: "e-commerce-dbec9.firebaseapp.com",
    projectId: "e-commerce-dbec9",
    storageBucket: "e-commerce-dbec9.appspot.com",
    messagingSenderId: "309591358893",
    appId: "1:309591358893:web:ea13e771ea21b53348b524",
    measurementId: "G-F3H84QD8EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => await signInWithPopup(auth, googleProvider);

export default app;
