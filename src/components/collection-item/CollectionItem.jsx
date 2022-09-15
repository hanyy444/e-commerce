import React from 'react'
import './collectionitem.scss'

import Button from '../Button/button'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({ item, addItem }) => {

  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button text="Add To Cart" inverted onClick={() => addItem(item)}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);