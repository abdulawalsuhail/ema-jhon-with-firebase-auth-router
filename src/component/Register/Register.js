import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate('/shop');
    }

    const handleConfirmBlur = e => {
        setConfirm(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault()
        if (password !== confirm) {
            setError('Your two password did not match ...')
            return
        } if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Register</h1>
                <form action="" onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your Email' id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your Password' id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmBlur} type="password" name="confirm-password" placeholder='Enter your confirm Password' id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Register" />
                </form>
                <p>
                    <span className='new-lR'> Already have an account ?</span> <Link className='form-link' to="/login">Login</Link>
                </p>
                <p style={{ textAlign: 'center' }}> <hr /> Or <hr /></p>
                <button className='google-btn'> Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;