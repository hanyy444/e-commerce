import React, {useState} from 'react'
import './shoppage.scss';
import { SHOP_DATA } from './shop.static.data';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

const ShopPage = () => {

    const [shopData, setShopData] = useState(SHOP_DATA)

    return (
        <div className='shoppage'>
            {shopData.map(collection => <PreviewCollection key={collection.id} {...collection}/>)}
        </div>
    )
}

export default ShopPage