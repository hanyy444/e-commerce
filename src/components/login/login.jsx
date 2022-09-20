import React, {useState} from 'react'
import Button from '../Button/button';
import Input from '../Input/input';
import './login.scss'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import { formSource } from './login.helper';

const Login = ({ googleSignInStart, emailSignInStart }) => {
    
    const { title, subtitle, inputs: inputSource, submitButtons: { signin, googleSignin} } = formSource

    // Performance issue???
    const state = inputSource.reduce((obj, item) => (obj[item.name] = item.value, obj), {});

    const [inputs, setInputs] = useState(state)

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({...inputs, [name]: value})
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = inputs;

        emailSignInStart(email, password)
    }
    
    return (
        <div className='login'>
            <h3 className='title'>{title}</h3>
            <p className='subtitle'>{subtitle}</p>
            <form onSubmit={(event) => onSubmit(event)}>
                {inputSource.map(input => <Input key={input.id} value={inputs[input.name]} onChange={onChange} {...input}/>)}
                <div className="form-footer">
                    <Button {...signin} />
                    <Button {...googleSignin} onClick={googleSignInStart} />
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Login)