import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './previewcollection.scss'

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='previewcollection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4 )
                .map(item => (
                    <CollectionItem key={item.id} {...item}/>
            ))}
        </div>
    </div>
  )
}

export default PreviewCollection