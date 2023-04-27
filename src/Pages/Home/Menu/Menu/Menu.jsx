import React, { useEffect, useRef, useState } from 'react';
import { Button, Carousel, CarouselItem, Col, Nav, Navbar, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './Menu.css'
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTODb, getCart } from '../../../../utilities/fakedb';
import Header from '../../Shared/Header/Header';
const Menu = () => {
    const [cart, setCart] = useState([])
    const [inputValue, setInputValue] = useState(1)
    const [breakfast, setBreakfast] = useState(true);
    const [launch, setLaunch] = useState(false);
    const [dinner, setDinner] = useState(false);

    const foods = useLoaderData();
    const { foodId } = useParams();
    const inputRef = useRef(1)
    const navigate = useNavigate()

    let food = foods.find(item => item.id === foodId)
    const { id, detail, img, name, price } = food;

    const handleBreakfast = () => {
        setBreakfast(true)
        setLaunch(false)
        setDinner(false)
    }
    const handleLaunch = () => {
        setBreakfast(false)
        setLaunch(true)
        setDinner(false)
    }
    const handleDinner = () => {
        setBreakfast(false)
        setLaunch(false)
        setDinner(true)
    }

    const handleAddToCart = (selectedFood) => {
        const exists = cart.find(food => food.id === selectedFood.id);
        const quantity = inputRef.current.value
        if (!exists) {
            selectedFood.quantity = quantity;
            setCart([...cart, selectedFood])

        } else {
            toast("Already add to cart")
        }

        addTODb(id, quantity)
    }
    console.log(cart);
    const handleMinus = () => {
        const newValue = inputValue - 1;
        if (newValue <= 0) {
            toast('Quantity should be grater than Zero')
        } else {
            setInputValue(newValue)
        }
    }
    const handleQuantity = (e) => {
        console.log(e.target.value);
    }


    useEffect(() => {
        const storedCart = getCart()
        // console.log(storedCart);
        const savedCart = []
        for (const id in storedCart) {
            const addedFood = foods.find(food => food.id === id)
            if (addedFood) {
                // console.log(addedFood);
                const quantity = storedCart[id];
                addedFood.quantity = quantity
                savedCart.push(addedFood)
            } else {

            }
        }
        setCart(savedCart)

    }, [foods])
    return (
        <>
            <Header></Header>
            <Navbar className='py-5 mb-5' bg="white" variant="light">
                <Nav className='mx-auto'>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-dark fw-bold' onClick={handleBreakfast} >Breakfast</Nav.Link>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-dark fw-bold' onClick={handleLaunch} >Launch</Nav.Link>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-dark fw-bold' onClick={handleDinner}>Dinner</Nav.Link>
                </Nav>

            </Navbar>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col>
                            <h1 className='mb-4'>{name}</h1>
                            <p style={{ color: "#686868" }} className="my-4 lh-lg">{detail}</p>
                            <div className='d-flex align-items-center w-50'>
                                <h1 className='me-4'>${price}</h1>
                                <div className='counter  px-3 py-2 d-flex flex-row align-items-center justify-content-evenly'>
                                    <button onClick={handleMinus} className='minus-btn'>-</button>
                                    <input className='text-center' onChange={handleQuantity} ref={inputRef} type="number" value={inputValue} />
                                    <button onClick={() => setInputValue(inputValue + 1)} className='plus-btn'>+</button>
                                </div>
                            </div>
                            <Button onClick={() => handleAddToCart(food)} className="cart-btn" variant='danger'>
                                <FaShoppingCart className='me-4'></FaShoppingCart>
                                Add
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='carousel-container my-5 py-5'>
                                <Carousel slide={false} interval={null} variant="dark">
                                    {
                                        breakfast && foods.slice(18, 21).map(food => <CarouselItem key={food.id}>
                                            <Row>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img} alt="" />
                                                </Col>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img2} alt="" />
                                                </Col>
                                            </Row>

                                        </CarouselItem>)
                                    }
                                    {
                                        launch && foods.slice(21, 24).map(food => <CarouselItem key={food.id}>
                                            <Row>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img} alt="" />
                                                </Col>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img2} alt="" />
                                                </Col>
                                            </Row>

                                        </CarouselItem>)
                                    }
                                    {
                                        dinner && foods.slice(24, 28).map(food => <CarouselItem key={food.id}>
                                            <Row>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img} alt="" />
                                                </Col>
                                                <Col xs={6}>
                                                    <img onClick={() => navigate(`/menu/${food.id}`)} src={food.img2} alt="" />
                                                </Col>
                                            </Row>

                                        </CarouselItem>)
                                    }


                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='text-center'>
                    <img width='75%' src={img} alt="" />
                </Col>
            </Row>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Menu;