import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import PreviewCollection from '../preview-collection/PreviewCollection'

import React from 'react'
import { useOutletContext } from 'react-router-dom'

import './collections-overview.scss'

const CollectionsOverview = ({ collections }) => {
  
  return (
    <div className="collections-overview">
        {collections.map(collection => <PreviewCollection key={collection.id} {...collection}/>)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
