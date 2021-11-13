import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/banner.png';
const Banner = () => {
    return (
        <div>
            <Container>
        <Row>
            <Col sm={12} md={6} >
                <div className="mt-5 pt-5">
                <h1>WE DO ALL! YOU JUST BUY AND ENJOY</h1>
                <h4>Enjoy the wonderful feeling with our Products</h4>
                </div>
            </Col>
            <Col sm={12} md={6}>
                 <img src={banner} alt="" className="img-fluid"/>
                 </Col>
        </Row>

        </Container>
          
        </div>
               
        
       );
};

export default Banner;