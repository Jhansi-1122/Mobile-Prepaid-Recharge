import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const Payment = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        method: '',
        details: ''
    });
    const navigate = useNavigate();
    const location = useLocation();

    const handlePayment = () => {
        // Simulate payment processing
        console.log('Payment processed:', paymentDetails);
        navigate('/confirmation');
    };

    return (
        <Container>
            <h2>Payment Options</h2>
            <Form>
                <Form.Group controlId="paymentMethod">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Control
                        as="select"
                        value={paymentDetails.method}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, method: e.target.value })}
                    >
                        <option value="">Select</option>
                        <option value="UPI">UPI</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="paymentDetails">
                    <Form.Label>Payment Details</Form.Label>
                    <Form.Control
                        type="text"
                        value={paymentDetails.details}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, details: e.target.value })}
                        placeholder="Enter payment details"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handlePayment}>
                    Pay
                </Button>
            </Form>
        </Container>
    );
};

export default Payment;
