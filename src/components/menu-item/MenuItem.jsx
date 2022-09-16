import React from 'react'
import { Link } from 'react-router-dom'
import './menuitem.scss'

const MenuItem= ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>

        <div  style={{
          backgroundImage: `url(${imageUrl})`
        }} className="background-image"/>

        <div className="content">
          <Link to={linkUrl}> 
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOW NOW</span>
          </Link>
        </div>

    </div>
  )
}

export default MenuItem