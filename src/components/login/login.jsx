import React, {useState} from 'react'
import Button from '../Button/button';
import Input from '../Input/input';
import './login.scss'

import { formSource } from './login.helper';

const Login = () => {
    
    const { title, subtitle, inputs: inputSource, submitButtons } = formSource

    const state = inputSource.reduce((obj, item) => (obj[item.name] = item.value, obj), {});

    const [inputs, setInputs] = useState(state)

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({...inputs, [name]: value})
    }
    
    return (
        <div className='login'>
            <h3 className='title'>{title}</h3>
            <p className='subtitle'>{subtitle}</p>
            <form onSubmit={(event) => submitButtons.signin.onSubmit(event, inputs)}>
                {inputSource.map(input => <Input key={input.id} onChange={onChange} {...input}/>)}
                <div className="form-footer">
                    <Button {...submitButtons.signin} />
                    <Button {...submitButtons.googleSignin} />
                </div>
            </form>
        </div>
    )
}

export default Login