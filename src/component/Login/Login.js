import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form action="" onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter your Password' id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    <span className='new-lR'> New to ema-john?</span> <Link className='form-link' to="/register">Create an account</Link>
                </p>
                <p style={{ textAlign: 'center' }}> <hr /> Or <hr /></p>
                <button className='google-btn'> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;