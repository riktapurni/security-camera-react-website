import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit,reset, errors } = useForm();
    const { user, isLoading, authError } = useAuth();
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
    fetch("https://floating-bastion-71805.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          if(data.modifiedCount){
            console.log(result)
            
            setSuccess(true);
            reset();
          }
        });
    console.log(data);
  };
    return (
        <div>
           <Container>
               <Link to="/dashboard">Back to Dashboard</Link>
               <h3>Make admin</h3>
                {!isLoading && (<form onSubmit={handleSubmit(onSubmit)}>
                <input
                className="input-field"
                name="email"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
                />
                <br />

                <input
                className="submit-btn btn btn-danger mt-3"
                type="submit"
                value="make as Admin"
                />
            </form>)}
            {isLoading && <Spinner variant="danger" animation="border" />}
            {/* {user?.email && 
                     <Alert variant="success" color="info">
                    Congrates, Admin created successfully !
                    </Alert>
                    }
                    {
                    authError && <Alert variant="danger" color="info">{authError}</Alert>
                    } */}
            </Container>
        </div>
    );
};

export default MakeAdmin;