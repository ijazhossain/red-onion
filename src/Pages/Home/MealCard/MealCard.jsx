import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const MealCard = ({ food }) => {
    const { id, description, img, name, price } = food;
    console.log(id, description, img, name, price);
    return (
        <>
            <Col lg={4}>
                <Card className='text-center p-4 h-auto'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default MealCard;