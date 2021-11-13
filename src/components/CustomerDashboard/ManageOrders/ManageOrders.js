import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
     const [orders, setOrders] = useState([]);
     const { register, handleSubmit } = useForm();
     const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://floating-bastion-71805.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`https://floating-bastion-71805.herokuapp.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };
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
                const remainingOrder = orders.filter(order => order?._id !== id);
                setOrders(remainingOrder)
            }
        })
        }
    }
    return (
        <div>
            <Container>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h2 className="my-5 text-danger">Orders are : {orders?.length}</h2>
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
                        orders?.map((order,index) => (
                            <tr key={order._id}>
                            <td>{index}</td>
                            <td>{order?.displayName}</td>
                            <td>{order?.email}</td>
                            <td>{order?.productName}</td>
                            <td>$ {order?.price}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    onClick={() => handleOrderId(order?._id)}
                                    {...register("status")}
                                >
                                    <option value={order?.status}>{order?.status}</option>
                                    <option value="approve">approve</option>
                                    <option value="done">done</option>
                                </select>
                                <input type="submit" />
                                </form>
                            </td>
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

export default ManageOrders;