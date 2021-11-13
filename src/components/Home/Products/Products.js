import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch('https://floating-bastion-71805.herokuapp.com/allProducts')
      .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const display = products.slice(0,6)
    return (
        <div>
            <Container>
              <h3 className="text-danger mb-5 text-center">Our Products</h3>
                 <Row xs={1} md={3} className="g-4">
            {
                display?.map(productDetails => (<Col key={productDetails?._id}>
                <Card>
                  <Card.Img variant="top" src={productDetails?.img} />
                  <Card.Body>
                    <Card.Title>{productDetails?.productName}</Card.Title>
                    <Card.Text>
                      {productDetails?.description}
                    </Card.Text>
                    <Card.Text>
                      Price: From Tk {productDetails?.price}
                    </Card.Text>
                  <NavLink  to={`/products/${productDetails?._id}`}> <Button variant="danger">Buy Now</Button>
                  </NavLink>

                  </Card.Body>
                </Card>
              </Col>))
                      }
            </Row>
            </Container>
        </div>
    );
};

export default Products;