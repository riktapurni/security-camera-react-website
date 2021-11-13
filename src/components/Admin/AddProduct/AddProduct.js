import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "./AddProduct.css";

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://floating-bastion-71805.herokuapp.com/addProduct', {
      method : 'post',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      if(data?.insertedId){
              alert('Successfully added Product');
              reset();
              }
    })
    };
    return (
        <div>
             <Container>
              {/* <Row>
                <Col xs={12} md={8}> */}
                  <h2 className="text-danger text-center">Add a Product</h2>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Image Link" {...register("img")} className="p-2 m-2 w-100 input-field" />
          <input placeholder="productName" {...register("productName", { required: true })} className="p-2 m-2 w-100 input-field" />
          
          <input placeholder="Description" {...register("description", { required: true })} className="p-2 m-2 w-100 input-field" />
          {errors.description && <span className="error">This field is required</span>}
          <input placeholder="Price"  {...register("price", { required: true })} className="p-2 m-2 w-100 input-field" />
          {errors.price && <span className="error">This field is required</span>}
          
          <input className="btn btn-danger" type="submit" className="p-2 m-2 w-100 input-field" />
        </form>
                {/* </Col>
              </Row> */}
            </Container>
        </div>
    );
};

export default AddProduct;