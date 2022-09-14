import React, { useState } from 'react'
import './input.scss'

const Input = ({ type, name, label, value, placeholder, onChange, required }) => {
    
    return (
        <input 
            className='input'
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            required={required}/>
    )
}

export default Input