import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './shoppage.scss';

import { connect } from 'react-redux';

// thunk code
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// saga code
// import { fetchCollectionsStart } from '../../redux/shop/shop.saga';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ 
    // thunk code
    // fetchCollectionsStartAsync 

    // saga code
    fetchCollectionsStart
}) => {

    // Firestore REST API ENDPOINT: https://firestore.googleapis.com/v1/projects/e-commerce-dbec9/databases/(default)/documents/
    // thunk code
    // useEffect(()=>{
    //     fetchCollectionsStartAsync();
    // },[fetchCollectionsStartAsync])

    // saga code
    useEffect(()=>{
        fetchCollectionsStart();
    }, [])

    return (
        <div className='shoppage'>
            <Outlet />   
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    // thunk code
    // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

    // sage code
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())

})



export default connect(null, mapDispatchToProps)(ShopPage);