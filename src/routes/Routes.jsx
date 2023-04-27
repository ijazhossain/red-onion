import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../Pages/Home/Home/Home";
import Breakfast from "../Pages/Home/Breakfast/Breakfast";
import MenuLayout from "../layouts/MenuLayout";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import OrderLayout from "../layouts/OrderLayout";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            }

        ]
    },
    {
        path: 'menu',
        element: <MenuLayout></MenuLayout>,
        children: [
            {
                path: ':foodId',
                element: <Menu></Menu>,
                loader: () => fetch('/data.json')
            }
        ]
    },
    {
        path: 'order',
        element: <OrderLayout></OrderLayout>,
        children: [
            {
                path: '/order',
                element: <Order></Order>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])
export default router;