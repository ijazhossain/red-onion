import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../Pages/Home/Home/Home";
import Breakfast from "../Pages/Home/Breakfast/Breakfast";

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
    }
])
export default router;