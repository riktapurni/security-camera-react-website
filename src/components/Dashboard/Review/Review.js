import React from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Review.css';
import { Link } from 'react-router-dom';

const Review = () => {
    const { register, handleSubmit,reset , errors } = useForm();
    const {user} = useAuth();
    const onSubmit = (data) => {
    fetch("https://floating-bastion-71805.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        if(data.insertedId){
                    alert('Successfully Added your Review');
                    reset();
                    }
            });

    console.log(data);
  };
    return (
        <div>
            <Container>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h3>Review</h3>
        <form className="review-form m-auto" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.email} {...register("email")} />

      <input {...register("review")} />
       {/* {errors.review && <span className="error">This field is required</span>} */}
      <input className="btn btn-danger" type="submit" value="post your Review"/>
    </form>
            </Container>
        </div>
    );
};

export default Review;