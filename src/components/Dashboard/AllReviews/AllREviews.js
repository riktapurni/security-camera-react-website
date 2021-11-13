import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';


const AllREviews = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(()=>{
        fetch('https://floating-bastion-71805.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div>
           <Container>
                <h2 className="my-5 text-danger"> {reviews?.length} :Reviews</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>email</th>
                        <th>Review</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                        reviews?.map((review,index) => (
                            <tr key={review._id}>
                            <td>{index}</td>
                            <td>{review?.email}</td>
                            <td>{review?.review}</td>
                        </tr>
                        ))
                        }
                    </tbody>
        </Table>
            </Container> 
        </div>
    );
};

export default AllREviews;