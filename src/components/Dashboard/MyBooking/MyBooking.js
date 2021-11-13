import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
    fetch(`https://floating-bastion-71805.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);
   //Order delete handler
    const handleDeleteOrder = id => {
         const proceed = window.confirm("Are you sure, You want to delete ?");
        if(proceed) {
            const url = `https://floating-bastion-71805.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('successfully Deleted Order');
                const remainingOrder = myOrders.filter(order => order?._id !== id);
                setMyOrders(remainingOrder)
            }
        })
        }
    }
    return (
        <div>
           
           <Container>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h2 className="my-5 text-danger">Orders are : { myOrders?.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>email</th>
                        <th>Booking name</th>
                        <th>Package Price($)</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        myOrders?.map((order,index) => (
                            <tr key={order._id}>
                            <td>{index}</td>
                            <td>{order?.displayName}</td>
                            <td>{order?.email}</td>
                            <td>{order?.productName}</td>
                            <td>$ {order?.price}</td>
                            <td>
                               {/* <Link to={`/orders/updateOrder/${order?._id}`}> <button className="btn btn-sm btn-warning">update</button></Link> */}
                               <button onClick={()=> handleDeleteOrder(order?._id)}className="btn btn-sm btn-danger">delete</button>
                               </td>
                        </tr>
                        ))
                        }
                    </tbody>
        </Table>
            </Container>
        </div>
    );
};

export default MyBooking;