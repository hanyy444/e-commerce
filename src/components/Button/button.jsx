import React from 'react'
import './button.scss'

const Button = ({ text, style, onClick }) => {
  return (
    <button style={style} onClick={onClick} className='button'>{text.toUpperCase()}</button>
  )
}

export default Button