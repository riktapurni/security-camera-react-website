import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        
        fetch('https://floating-bastion-71805.herokuapp.com/allproducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    //Order delete handler
    const handleDeleteproduct = id => {
         const proceed = window.confirm("Are you sure, You want to delete ?");
        if(proceed) {
            const url = `https://floating-bastion-71805.herokuapp.com/allProducts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('successfully Deleted Product');
                const remainingproduct = products.filter(product => product?._id !== id);
                setProducts(remainingproduct)
            }
        })
        }
    }

    return (
        <div>
           <Container>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h2 className="my-5 text-danger">Product sare : {products?.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        products?.map((product,index) => (
                            <tr key={product._id}>
                            <td>{index}</td>
                            <td>{product?.productName}</td>
                            <td>{product?.img}</td>
                            <td>{product?.price}</td>
                            <td>$ {product?.des}</td>
                            <td>
                               {/* <Link to={`/orders/updateOrder/${order?._id}`}> <button className="btn btn-sm btn-warning">update</button></Link> */}
                               <button onClick={()=> handleDeleteproduct(product?._id)}className="btn btn-sm btn-danger">delete</button>
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

export default ManageProducts;