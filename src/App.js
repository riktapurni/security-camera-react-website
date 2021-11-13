import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import Admin from './components/Admin/Admin/Admin';
import Products from './components/Home/Products/Products';
import ProductDetails from './components/productDetails/ProductDetails';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Review from './components/Dashboard/Review/Review';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import Pay from './components/CustomerDashboard/Pay/Pay';
import MyBooking from './components/Dashboard/MyBooking/MyBooking';
import ManageOrders from './components/CustomerDashboard/ManageOrders/ManageOrders';
import Explore from './components/Home/Explore/Explore';
import Contact from './components/Home/Contact/Contact';
function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Router>
       <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
           <Admin></Admin>
          </Route>
          <Route exact path="/dashboard/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/products">
           <Products></Products>
          </Route>
          <Route exact path="/explore">
          <Explore></Explore>
          </Route>
          <Route exact path="/dashboard/manageProducts">
           <ManageProducts></ManageProducts>
          </Route>
          <PrivateRoute exact path="/products/:id">
           <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/myOrders">
          <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/myBooking">
           <MyBooking></MyBooking>
          </PrivateRoute>
          <Route exact path="/dashboard/makeAdmin">
           <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/dashboard/review">
           <Review></Review>
          </Route>
          <Route exact path="/dashboard/pay">
           <Pay></Pay>
          </Route>
          <Route exact path="/contact">
           <Contact></Contact>
          </Route>
          
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
