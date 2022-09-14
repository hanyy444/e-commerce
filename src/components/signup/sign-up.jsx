import React, { useState } from 'react'
import './sign-up.scss'
import Input from '../Input/input'
import Button from '../Button/button'
import { formSource } from './sign-up.helper.js'

const SignUp = () => {

    const { title, subtitle, inputs: inputSource, submitButton } = formSource

    // Reduce from array of objects to object {name: value} and '' on initial state
    const state = inputSource.reduce((initialState, input) => (initialState[input.name], initialState), {});

    const [inputs, setInputs] = useState(state)

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({ ...inputs, [name]: value})
    }

    return (
        <div className='sign-up'>
            <h3 className="title">{title}</h3>            
            <p className='subtitle'>{subtitle}</p>
            <form onSubmit={(event)=>submitButton.onSubmit(event, inputs)}>
                {inputSource.map(input=> <Input key={input.id} value={inputs[input.name]} onChange={onChange} {...input}/>)}
                <Button text={submitButton.text} />
            </form>
        </div>
    )
}

export default SignUp