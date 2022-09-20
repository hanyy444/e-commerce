import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './previewcollection.scss'
import { useNavigate, useLocation } from 'react-router-dom'

const PreviewCollection = ({ title, items, routeName }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className='previewcollection'>
        <h1 className='title' onClick={()=>navigate(`${pathname}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4 )
                .map(item => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default PreviewCollection