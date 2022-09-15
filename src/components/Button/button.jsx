import React from 'react'
import './button.scss'

const Button = ({ text, style, onClick, inverted, classes }) => {
  return (
    <button style={style} onClick={onClick} className={`${inverted ? `inverted` : ``} button ${classes}`}>{text.toUpperCase()}</button>
  )
}

export default Button