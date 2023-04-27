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
                <Card onClick={() => navigate(`/menu/${id}`)} style={{ height: '300px' }} className='text-center p-4 mb-4 border-0 food-card'>
                    <Card.Img className='mx-auto' variant="top" src={img} />
                    <Card.Body className='d-flex flex-column'>
                        <h5 title={name} style={{ color: '#212529' }} className='text-truncate fw-semibold'>{name}</h5>
                        <Card.Text title={description} style={{ color: "#6c757d" }} className='text-truncate'>
                            {description}
                        </Card.Text>
                        <p className='fw-bold fs-5'><span className='fs-4'>${price.split('.')[0]}</span>.{price.split('.')[1]}</p>
                        {/* <Button onClick={() => navigate(`/menu/${id}`)} className='card-btn mt-auto' variant="primary">View Details</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default MealCard;