import { useEffect, useState } from "react"
import { getCart } from "../utilities/fakedb"
import useFoods from "./useFoods"

const useCart = () => {
    const foods = useFoods()
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getCart()
        // console.log(storedCart);
        const savedCart = []
        // const savedCart = []
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
        // console.log(cart);
    }, [foods])
    return [cart, setCart]
}
export default useCart;