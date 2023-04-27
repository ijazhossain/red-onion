const addTODb = (id, quantity) => {
    let foodCart = {};
    const storedCart = localStorage.getItem('food-cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart)
    }
    foodCart[id] = quantity;
    localStorage.setItem('food-cart', JSON.stringify(foodCart))
}
const getCart = () => {
    let foodCart = {}
    const storedCart = localStorage.getItem('food-cart')
    if (storedCart) {
        foodCart = JSON.parse(storedCart)
    }
    return foodCart;
}
export {
    addTODb,
    getCart
}