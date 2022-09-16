import React, { useState } from 'react'

import MenuItem from '../menu-item/MenuItem'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(section => <MenuItem key={section.id} { ...section }/>)}
        </div>  
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);