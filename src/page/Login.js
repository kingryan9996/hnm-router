import { faL } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
    const loginUser = (e) => {
        e.preventDefault()
        // console.log(setAuthenticate)
        setAuthenticate(true)
        navigate('/')

        console.log('aaa')
    }

    const navigate = useNavigate()




    return (
        <Container>
            <Form onSubmit={(e) => { loginUser(e) }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    )
}

export default Login