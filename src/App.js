import './App.css';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signin/sign-in';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.setup'


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, user => setCurrentUser(user))
    return () => unsubscribeFromAuth();
  }, [])


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
