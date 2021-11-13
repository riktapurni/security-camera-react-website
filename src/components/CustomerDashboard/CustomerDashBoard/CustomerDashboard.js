import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';

const CustomerDashboard = () => {
    let {path, url} =useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                         <h5>Dashboard</h5>
                       <Link to={`${url}`}>
                        <li className="dashboard-menu mt-5">Dashboard</li>
                        </Link> 
                       <Link to={`${url}/pay`}>
                        <li className="dashboard-menu mt-5">Pay</li>
                        </Link> 
                       <Link to={`${url}/review`}>
                        <li className="dashboard-menu mt-5">Review</li>
                        </Link> 
                    </Col>
                    <Col xs={12} md={9}>
                        Content here
                        <Switch>
                            <Route exact path={`${path}`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/Review`}>
                                <Review></Review>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default CustomerDashboard;