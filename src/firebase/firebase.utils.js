import { firestore } from './firebase.setup';
import { doc, collection, setDoc, getDoc, getDocs, writeBatch, addDoc } from 'firebase/firestore'

export const createUserProfileDocument = async (userAuth, additionalData) => {

    // CREATE AND SAVE USER DOCUMENT IN FIRESTORE DATABASE
    // AUTHENTICATE USER 
    // RETURN REF WHICH IS LINKED TO THE NEWLY CREATED DOCUMENT
    // SO THAT AUTHENTICATED USER BECOMES DATABASE USER

    if (!userAuth) return;

    // Get Refereneces
    const userRef = doc(firestore, `/users/${userAuth.uid}`)
    const collectionRef = collection(firestore, `users`)

    // Get Snapshots
    const snapShot = await getDoc(userRef)
    const collectionSnapShot = await getDocs(collectionRef)

    const users = collectionSnapShot.docs.map(doc => doc.data())

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

export const convertCollectionsSnapshotToMap = snapShot =>
    snapShot.docs
        .map(doc => {
            return { ...doc.data(), id: doc.id }
        })
        .reduce((accumulator, collection) => {
            accumulator[collection.routeName] = collection;
            return accumulator;
        }, {});

// Batch collection and documents creation
// @params: collection name & array of objects (documents) to add
// @return: collection reference 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestore, collectionKey);

    // Batch request (good for predictable changes in database(atomicity)) -> atomic function
    const batch = writeBatch(firestore);

    await objectsToAdd.forEach(async obj => {
        const newDocRef = await addDoc(collectionRef, obj);
        batch.set(newDocRef, obj);
    })

    await batch.commit();

    return collectionRef
}