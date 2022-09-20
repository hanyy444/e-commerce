import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase.setup';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
    yield console.log('fetchCollectionsAsync is fired.')

    try {
        const collectionsRef = collection(firestore, 'collections');
        const collectionSnapShot = yield getDocs(collectionsRef);
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionSnapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}