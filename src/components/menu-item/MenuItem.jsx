import React from 'react'

import './menuitem.scss'

const MenuItem= ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>

        <div  style={{
          backgroundImage: `url(${imageUrl})`
        }} className="background-image"/>

        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOW NOW</span>
        </div>

    </div>
  )
}

export default MenuItem