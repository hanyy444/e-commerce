import React from 'react'
import { Outlet } from 'react-router-dom';
import './shoppage.scss';

const ShopPage = () => {
    return (
        <div className='shoppage'>
            <Outlet />            
        </div>
    )
}



export default ShopPage;