import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './shoppage.scss';

import { connect } from 'react-redux';

import { firestore } from '../../firebase/firebase.setup';
import { collection, onSnapshot } from 'firebase/firestore';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { useState } from 'react';

const ShopPage = ({ updateCollections }) => {

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{

        // Firestore REST API ENDPOINT: https://firestore.googleapis.com/v1/projects/e-commerce-dbec9/databases/(default)/documents/

        // Observer Pattern (Live update)
        const collectionsRef = collection(firestore, 'collections');

        const unsubscribeFromSnapshot = onSnapshot(collectionsRef, async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot)

            updateCollections(collectionsMap)

            setLoading(false)
        })

        return () => unsubscribeFromSnapshot();
    },[])

    const OutLetWithSpinner = WithSpinner(Outlet);

    return (
        <div className='shoppage'>
            <OutLetWithSpinner isLoading={isLoading}/>   
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})



export default connect(null, mapDispatchToProps)(ShopPage);