import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import {
  
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
     const [isAdmin, setIsAdmin] = useState(false);
     const [isUser, setIsUser] = useState(false);
     const {user} = useAuth();
     useEffect(() => {
    fetch(`https://floating-bastion-71805.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  //User
  useEffect(() => {
    fetch(`https://floating-bastion-71805.herokuapp.com/checkUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role !== "admin") {
          setIsUser(true);
        } else {
          setIsUser(false);
        }
      });
  }, [user?.email]);
  console.log(isUser);
    return (
        <div>
        <Container>
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
               <ul>
                 <li>
                  <Link to={`${url}`}>Dashboard</Link>
                </li>
                {/* Admin */}
                {isAdmin && (
                  <div>
                    <li>
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                </li>
                <li>
                  <Link to={`${url}/addProduct`}>Add Product</Link>
                </li>
                <li>
                  <Link to={`${url}/manageProducts`}>Manage Products</Link>
                </li>
                <li>
                  <Link to={`${url}/myOrders`}>Manage Orders</Link>
                </li>
                  </div>
                )}
                {/* User */}
                {isUser &&(
                <div>
                  <li>
                  <Link to={`${url}/myBooking`}>My Orders</Link>
                </li>
                <li>
                  <Link to={`${url}/review`}>Review</Link>
                </li>
                <li>
                  <Link to={`${url}/pay`}>Pay</Link>
                </li>
                </div>
                )}
              </ul>
          </div>
        </div>
        <div className="col-md-3 ">
      <Switch>
        <Route exact path={path}>
          <h3>DashBoard</h3>
        </Route>
        {/* <Route path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>*/}
        {/* <Route  exact path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>  */}
        {/* <Route  exact path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>  */}
      </Switch>
        </div>
      </div>
        </Container>
        </div>

    );
};

export default Dashboard;