import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { getUserByMobileNumber } from '../Services/api';

const MobileNumberInput = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await getUserByMobileNumber(mobileNumber);
            if (response.data) {
                navigate('/plans');
            } else {
                setError('Invalid mobile number or user does not exist.');
            }
        } catch (error) {
            setError('Error fetching user: ' + error.message);
        }
    };

    return (
        <Container>
            <h2>Enter Mobile Number</h2>
            <Form>
                <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter mobile number"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>
        </Container>
    );
};

export default MobileNumberInput;
