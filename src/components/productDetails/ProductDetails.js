import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
 import { useForm } from 'react-hook-form';
 import './ProductDetails.css';
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    const onSubmit = data => {
      data.email = user?.email;
      data.status = "pending";
    fetch('https://floating-bastion-71805.herokuapp.com/orders', {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
       
      if(data.insertedId){
              alert('Successfully Buy Product');
              reset();
              }
    })
    console.log(data);
  };
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState({})
    useEffect(()=>{
        fetch(`https://floating-bastion-71805.herokuapp.com/productDetails/${id}`)
    
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
      console.log(fetch);
    }, [id]);
    
    return (
        <div>
          <Container>
            <h6 className="text-danger">Product Id : {id}</h6>
            
          <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: '30rem' }} className="">
            <Card.Img variant="top" src={productDetails?.img} className="w-50" />
            <Card.Body>
              <Card.Title>{productDetails?.productName}</Card.Title>
              <Card.Text>
                Description : {productDetails?.description}
              </Card.Text>
              <Card.Text>
                Price :From $ {productDetails?.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
          <Card.Body>
      <form className="booking-form m-auto" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("displayName")} />
      
      <input defaultValue={user.email} {...register("email")} />
      {/* errors will return when field validation fails  */}
      
      {/* <input placeholder="Address" {...register("address", { required: true })} />
      {errors.address && <span className="error">This field is required</span>}
      <input placeholder="City"  {...register("city", { required: true })} />
      {errors.city && <span className="error">This field is required</span>}
      <input placeholder="Phone"  {...register("phone", { required: true })} />
      {errors.phone && <span className="error">This field is required</span>} */}
        {/* offer name */}
      <input defaultValue={productDetails?.productName} {...register("productName")} />
      <input defaultValue={productDetails?.price} {...register("price")} />
      <input defaultValue={productDetails?.img} {...register("img")} />
      
      <input className="btn btn-danger" type="submit" value=" Order Now"/>
    </form>
    </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
        </div>
       
    );
};

export default ProductDetails;