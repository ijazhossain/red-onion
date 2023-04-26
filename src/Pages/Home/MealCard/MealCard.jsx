import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './MealCard.css'
import { useNavigate } from 'react-router-dom';
const MealCard = ({ food }) => {
    const { id, description, img, name, price } = food;
    // console.log(id, description, img, name, price);
    const navigate = useNavigate()
    return (
        <>
            <Col lg={4}>
                <Card style={{ height: '600px' }} className='text-center p-4 mb-4'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p className='fs-1 mt-auto'>${price}</p>
                        <Button onClick={() => navigate(`/menu/${id}`)} className='card-btn mt-auto' variant="primary">View Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default MealCard;