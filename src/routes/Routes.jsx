


import Root from "../layouts/Root";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/socialEvent.json')
                
            },
            {
                path: '/login',
                element: <Login></Login>
                
            },
            {
                path: '/registration',
                element: <Registration></Registration>
                
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ()=>fetch('/socialEvent.json')
            }
        ]
    }    
]);

export default router;