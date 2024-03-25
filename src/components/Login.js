//login.js
import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import useAuth from '../contexts/AuthContext'
import { Card, Form, Button } from 'react-bootstrap'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

  return (
    <>
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      <Card className="w-100" style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group id="password" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    {errorMessage && <div className="text-red-600 font-bold mt-3">{errorMessage}</div>}

                    <Button disabled={isSigningIn} className="w-100 mt-3" type="submit">
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
                <hr className="my-4" />
                <Button onClick={onGoogleSignIn} disabled={isSigningIn} className="w-100" variant="light" type="button">
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default Login;