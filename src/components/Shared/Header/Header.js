import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
           <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-3 py-3">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <img src="" alt="" />
              </div>Smart Security</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Navbar.Text className="mx-2 ">
                             <span className="text-white fw-bolder">{user?.displayName} </span>
                        </Navbar.Text>
              
                {
                  user?.email ?
                    <div>
                      <NavLink style={{ textDecoration: 'none', color:'white'}} to="/dashboard">
                    DashBoard
                    </NavLink>
                      <Button className="ms-4" onClick={logOut} variant="danger">LogOut</Button> 
                    </div>
                      :
                      <NavLink style={{ textDecoration: 'none', color:'white'}} to="/login">
                    <Button variant="danger">Login</Button>
                    </NavLink> 
              }
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
        </>
    );
};

export default Header;