import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Confirmation = () => {
    const location = useLocation();
    return (
        <Container>
            <h2>Payment Confirmation</h2>
            <p>Thank you for your payment!</p>
        </Container>
    );
};

export default Confirmation;
