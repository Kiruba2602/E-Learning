//signup.js
import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import  useAuth  from '../contexts/AuthContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { Card, Form, Button, Alert  } from 'react-bootstrap';

const Signup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering && password === confirmPassword) {
          setIsRegistering(true);
          try {
              await doCreateUserWithEmailAndPassword(email, password);
              navigate('/home');
          } catch (error) {
              setErrorMessage(error.message);
          } finally {
              setIsRegistering(false);
          }
      } else if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
      }
    }

  return (
    <>
    { userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
    <Card className="w-100" style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isRegistering}
                        />
                    </Form.Group>
                    <Form.Group id="password" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isRegistering}
                        />
                    </Form.Group>
                    <Form.Group id="password-confirm" className="mt-3">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            autoComplete="off"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={isRegistering}
                        />
                    </Form.Group>
                    <Button disabled={isRegistering} className="w-100 mt-3" type="submit">
                        {isRegistering ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default Signup;