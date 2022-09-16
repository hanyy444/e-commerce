import React from 'react'
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collectionpage.scss';

const CollectionPage = () => {

    const { collectionName } = useParams();

    const collection = useSelector(state => selectCollection(collectionName)(state))

    const { title, items }= collection

    return (
        <div className='collection-page'>
            <h2>{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}


// Instead of using connect which is a legacy way, useSelector hook instead
// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection()
// })

export default CollectionPage