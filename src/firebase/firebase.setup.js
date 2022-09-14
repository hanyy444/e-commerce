import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc } from 'firebase/firestore'
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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    // CREATE AND SAVE USER DOCUMENT IN FIRESTORE DATABASE
    // AUTHENTICATE USER 
    // RETURN REF WHICH IS LINKED TO THE NEWLY CREATED DOCUMENT

    if (!userAuth) return;

    const userRef = doc(firestore, `/users/${userAuth.uid}`)

    const snapShot = await getDoc(userRef)

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => await signInWithPopup(auth, googleProvider);

export default app;
