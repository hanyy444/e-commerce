import './App.css';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signin/sign-in';

import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore'
import { auth, createUserProfileDocument } from './firebase/firebase.setup'


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
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

  console.log(currentUser)

  return (
    <div>
      <Header user={currentUser} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
