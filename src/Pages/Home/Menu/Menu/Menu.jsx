import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import bf1 from '../../../../assets/images/breakfast/breakfast1.png'
import bf2 from '../../../../assets/images/breakfast/breakfast2.png'
import bf3 from '../../../../assets/images/breakfast/breakfast3.png'
import bf4 from '../../../../assets/images/breakfast/breakfast4.png'
import bf5 from '../../../../assets/images/breakfast/breakfast5.png'
import bf6 from '../../../../assets/images/breakfast/breakfast6.png'
import './Menu.css'
import { FaShoppingCart } from 'react-icons/fa';
const Menu = () => {
    const foods = useLoaderData();
    // console.log(foods);
    const { foodId } = useParams();
    console.log(foodId);
    const food = foods.find(item => item.id === foodId)
    console.log(food);
    const { id, detail, img, name, price } = food;
    return (
        <div className='py-5 mt-5'>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col>
                            <h1>{name}</h1>
                            <p style={{ color: "#686868" }} className="my-4 lh-lg">{detail}</p>
                            <div className='d-flex align-items-center w-50'>
                                <h1 className='me-4'>${price}</h1>
                                <div className='counter  px-1 py-1 d-flex flex-row align-items-center justify-content-evenly'>
                                    <button className='minus-btn'>-</button>
                                    <input type="number" />
                                    <button className='plus-btn'>+</button>
                                </div>
                            </div>
                            <Button className="cart-btn" variant='danger'>
                                <FaShoppingCart className='me-4'></FaShoppingCart>
                                Add
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='carousel-container mt-5'>
                                <Carousel slide={false} variant="dark">
                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={6}>
                                                <img src={bf1} alt="" />
                                            </Col>
                                            <Col lg={6}>
                                                <img src={bf2} alt="" />
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={6}>
                                                <img src={bf5} alt="" />
                                            </Col>
                                            <Col lg={6}>
                                                <img src={bf6} alt="" />
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col lg={6}>
                                                <img src={bf3} alt="" />
                                            </Col>
                                            <Col lg={6}>
                                                <img src={bf4} alt="" />
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='text-center'>
                    <img width='75%' src={img} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Menu;