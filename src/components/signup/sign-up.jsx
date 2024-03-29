import React, { useState } from 'react'
import './sign-up.scss'
import Input from '../Input/input'
import Button from '../Button/button'

import { formSource } from './sign-up.helper.js'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'
import { useEffect } from 'react'

const SignUp = ({ signUpStart }) => {

    const { title, subtitle, inputs: inputSource, submitButton } = formSource

    const [inputs, setInputs] = useState(null)
    
    useEffect(()=>{
        // Reduce from array of objects to object {name: value} on initial state
        const state = inputSource.reduce((initialState, input) => (initialState[input.name], initialState), {});
        setInputs(state);
    }, [inputSource])
    
    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({ ...inputs, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { password, confirmPassword } = inputs;

        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return;
        }

        signUpStart(inputs)
    }

    return inputs && (
        <div className='sign-up'>
            <h3 className="title">{title}</h3>            
            <p className='subtitle'>{subtitle}</p>
            <form onSubmit={(event)=>onSubmit(event)}>
                {inputSource.map(input=> <Input key={input.id} value={inputs[input.name]} onChange={onChange} {...input}/>)}
                <Button text={submitButton.text} />
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpForm) => dispatch(signUpStart(signUpForm))
})

export default connect(null, mapDispatchToProps)(SignUp)