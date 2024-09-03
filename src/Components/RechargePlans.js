import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { getAllPlans } from '../Services/api';

    const RechargePlans = () => {
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchPlans = async () => {
            const response = await getAllPlans();
            setPlans(response.data);
        };

        fetchPlans();
    }, []);

    const handleSelectPlan = () => {
        navigate('/payment');
    };

    return (
        <Container>
            <h2>Select a Recharge Plan</h2>
            <Row>
                {plans.map(plan => (
                    <Col key={plan.id} sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{plan.name}</Card.Title>
                                <Card.Text>
                                    Price: ${plan.price}
                                    <br/>
                                    Validity: {plan.validityDays} days
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleSelectPlan(plan)}>
                                    Select
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RechargePlans;
