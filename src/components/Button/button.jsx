import React from 'react'
import ButtonContainer from './button.styles'

const Button = (props) => (
  <ButtonContainer {...props}>
    {props.text.toUpperCase()}
  </ButtonContainer>
)


export default Button