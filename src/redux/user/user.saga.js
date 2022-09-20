import { UserActionTypes } from "./user.types";
import {
    googleSignInSuccess,
    googleSignInFailure,
    emailSignInSuccess,
    emailSignInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
} from "./user.actions";
import { createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { takeLatest, put, call, all } from "redux-saga/effects";
import { getDoc } from "firebase/firestore";
import { auth, googleProvider } from "../../firebase/firebase.setup";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";



function* googleSignInAsync() {
    try {
        const { user: userAuth } = yield signInWithPopup(auth, googleProvider);
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield getDoc(userRef)
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(googleSignInFailure(error.message))
    }
}

export function* googleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        googleSignInAsync
    )
}

function* emailSignInAsync({ payload: { email, password } }) {
    try {
        const { user: userAuth } = yield signInWithEmailAndPassword(auth, email, password);
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield getDoc(userRef)
        yield put(
            emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(
            emailSignInFailure(error)
        );
    }
}

export function* emailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        // payload is sent automatically
        emailSignInAsync
    )
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield getDoc(userRef)
        yield put(
            emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
        yield
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

function* signOutStartAsync() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure())
    }
}

export function* signOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOutStartAsync
    )
}


function* signUpAsync({ payload: signUpForm }) {

    try {
        const { displayName, email, password } = signUpForm;

        const { user: userAuth } = yield createUserWithEmailAndPassword(auth, email, password);

        const userRef = yield call(createUserProfileDocument, userAuth, { displayName });

        const userSnapshot = yield getDoc(userRef)

        yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        yield put(signUpFailure(error))
    }

}

export function* signUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        signUpAsync
    )
}

// Init all sagas
export function* userSagas() {
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(onCheckUserSession),
        call(signOutStart),
        call(signUpStart)
    ])
}