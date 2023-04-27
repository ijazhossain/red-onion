import React, { useRef, useState } from 'react';

const CartItem = ({ cartItem }) => {
    // console.log(cartItem);
    const { id, img, price, name } = cartItem;
    const [inputValue, setInputValue] = useState(1)
    const inputRef = useRef(1)
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


    return (
        <div className='d-flex align-items-center px-3 py-4 mb-3 rounded-3' style={{ backgroundColor: "#f5f5f5" }}>
            <img className='me-3' width='100px' src={img} alt="food image" />
            <div className='flex-grow-1 text-center'>
                <h6 title={name} className='fw-bold'>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h6>
                <p style={{ color: '#F91944' }} className='fw-semibold fs-3 mb-0'>${price}</p>
                <p className="text-muted mb-0"><small>Delivery free</small></p>
            </div>
            <div className='d-flex align-items-center justify-content-center ms-3'>
                <button onClick={handleMinus} className='minus-btn border-0 bg-transparent fs-2 '>-</button>
                <input style={{ width: "40px" }} className='text-center border-0 rounded-3 bg-white  py-2 fs-4' onChange={handleQuantity} ref={inputRef} type="number" value={inputValue} />
                <button onClick={() => setInputValue(inputValue + 1)} className='plus-btn border-0 bg-transparent fs-2'>+</button>
            </div>

        </div>
    );
};

export default CartItem;