import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
// import MyOrders from '../../CustomerDashboard/MyOrders/MyOrders';

const DashboardHome = () => {
    let {path, url} =useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                         
                       
                    </Col>
                    
                </Row>
                </Container>
        </div>
    );
};

export default DashboardHome;