import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
              
                  <Row className="mt-4">
                       <h2 className="text-center my-5 text-danger">Keep in Touch</h2>
                    <Col xs={12} md={7}>
                    <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="submit" value="Submit" className="btn btn-danger" />
                </Form.Group>
                </Form>
                    </Col>
                    <Col xs={12} md={5}>
                    <p className="text-success">Address</p>
                    <p>34 Street Name, City Name Here, Dhaka</p>
                    <p>Phone : 088-12345678</p>
                    <p>email : info@yourdomain.com</p>
                    </Col>
                </Row>     
            </Container>
        </div>
    );
};

export default Contact;