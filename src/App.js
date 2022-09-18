import './App.css';

import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/sign-in';
import CollectionPage from './pages/collection/CollectionPage';
import Checkout from './pages/checkout/checkout';

import CollectionsOverview from './components/collections-overview/collections-overview';

import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore'
import { auth } from './firebase/firebase.setup'
import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'

import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selectors';

function App({ currentUser, setCurrentUser }) {

  useEffect(() => {

    // Observer Pattern: sign in/out events stream on live firestore database
    // Live Update function
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
        {/* No exact because it will route to others /shop/mens , /shop/mens/:id */}
        <Route path='/shop' element={<ShopPage />}>
          <Route index element={<CollectionsOverview />} />
          <Route path=':collectionName' element={<CollectionPage />} />
        </Route>
        <Route exact path='/checkout' element={<Checkout />} />
        <Route
          exact
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

// from store, dispatch = apply reducer action/function and returns an object (type and payload)
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// app doesn't need any props (no mapStateToProps), so null is passed
export default connect(mapStateToProps, mapDispatchToProps)(App);
