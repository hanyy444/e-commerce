import GlobalStyle from './global.styles';

import React, { lazy, useEffect, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions'

import Spinner from './components/spinner/spinner.component';

// LAZY Loading
const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const Header = lazy(() => import('./components/header/header.component'));
const SignInPage = lazy(() => import('./pages/signin/sign-in'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const CollectionsOverviewContainer = lazy(() => import('./components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('./pages/collection/collection.container'));

function App({ currentUser, checkUserSession }) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          {/* No exact because it will route to others /shop/mens , /shop/mens/:id */}
          <Route path='/shop' element={<ShopPage />}>
            <Route index element={<CollectionsOverviewContainer />} />
            <Route path=':collectionName' element={<CollectionPageContainer />} />
          </Route>
          <Route exact path='/checkout' element={<Checkout />} />
          <Route
            exact
            path='/sign-in'
            element={!currentUser ? (<SignInPage />) : (<Navigate to="/" replace />)}
          />
        </Routes>
      </Suspense>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// from store, dispatch = apply reducer action/function and returns an object (type and payload)
const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: () => dispatch(checkUserSession())
})

// app doesn't need any props (no mapStateToProps), so null is passed
export default connect(mapStateToProps, mapDispatchToProps)(App);


  // // Observer Pattern: sign in/out events stream on live firestore database
  // // Live Update function
  // const unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {

  //   if (userAuth) {

  //     console.log('Authenticated in firebase, so will login automatically.')

  //     const userRef = await createUserProfileDocument(userAuth);

  //     onSnapshot(userRef, (snapShot => {
  //       setCurrentUser({ id: snapShot.id, ...snapShot.data() })
  //     }))

  //     return;
  //   }

  //   setCurrentUser(userAuth);

  // })

  // return () => unsubscribeFromAuth();