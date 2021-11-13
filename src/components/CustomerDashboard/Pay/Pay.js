import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div>
            <Container>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h3 className="m-4">Payment system coming soon.......</h3>
            </Container>
            
        </div>
    );
};

export default Pay;