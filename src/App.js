import './App.css';

import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signin/sign-in';

import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore'
import { auth, createUserProfileDocument } from './firebase/firebase.setup'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

function App({ currentUser, setCurrentUser }) {

  useEffect(() => {

    // Checks if user is authenticated by Google
    const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

      if (userAuth) {

        console.log('Authenticated in firebase, so will login automatically.')

        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        }))

        return;
      }

      setCurrentUser(userAuth);



    })

    return () => unsubscribeFromAuth();
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route
          path='/sign-in'
          element={
            !currentUser ? (
              <SignInPage />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

// from store, dispatch = apply reducer action/function and returns an object (type and payload)
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// app doesn't need any props (no mapStateToProps), so null is passed
export default connect(mapStateToProps, mapDispatchToProps)(App);
