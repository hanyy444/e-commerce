import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// Redux-thunk async function
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {

//         // Observer Pattern (Live update)
//         const collectionsRef = collection(firestore, 'collections');

//         dispatch(fetchCollectionsStart());

//         try {
//             onSnapshot(collectionsRef, async snapShot => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
//                 dispatch(fetchCollectionsSuccess(collectionsMap))
//             })
//         } catch (error) {
//             dispatch(fetchCollectionsFailure(error.message))
//         }
//     }
// }
