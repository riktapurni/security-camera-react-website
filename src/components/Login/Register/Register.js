import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerNewUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    }
    //handle login 
    const handleLoginSubmit = e => {
        //password validation
         if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerNewUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    
    return (
        <div>
           <Container>
               <h3>Register</h3>
                <Row>
                    <Col xs={12} md={5}>
                  {!isLoading &&   <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Re-type your Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                       Register
                    </Button>
                    <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="success" size="lg">Already Registerd ? Please Login</Button>
                        </NavLink>
                    </div>
                    </Form>}
                    {isLoading && <Spinner variant="danger" animation="border" />}
                    {user?.email && 
                     <Alert variant="success" color="info">
                    Congrates, User created successfully !
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

export default Register;