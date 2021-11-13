import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, signInUsingGoogle, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //handle login 
    const handleLoginSubmit = e => {
        // alert('hello');
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <div>
           <Container>
               <h3>Login</h3>
                <Row>
                    <Col xs={12} md={5}>
                    {!isLoading && <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" onBlur={handleOnChange} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" onBlur={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                       Login
                    </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="success">New User? Please Register</Button>
                        </NavLink>
                        <p>-----------------------------</p>
                            <Button onClick={handleGoogleSignIn}>Google Login</Button>
                    </div>
                    </Form>}
                    {isLoading && <Spinner variant="danger" animation="border" />}
                    {user?.email && 
                     <Alert variant="success" color="info">
                    Congrates, User Login successfully !
                    </Alert>
                    }
                    {
                    authError && <Alert variant="danger" color="info">{authError}</Alert>
                    }
                    </Col>
                    <Col xs={12} md={7}>
                    <img style={{ width: '100%' }} src={login} alt="" /> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;