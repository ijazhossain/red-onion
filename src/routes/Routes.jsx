import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../Pages/Home/Home/Home";
import Breakfast from "../Pages/Home/Breakfast/Breakfast";
import MenuLayout from "../layouts/MenuLayout";
import Menu from "../Pages/Home/Menu/Menu/Menu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
    }
])
export default router;