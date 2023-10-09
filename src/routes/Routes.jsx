


import Root from "../layouts/Root";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/contactUs/ContactUs";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import AllGallery from "../pages/AllGallery/AllGallery";




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
            },
            {
                path: '/contact',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
                
            },
            {
                path: "*",
                element:<ErrorPage></ErrorPage>
            
              },
            {
                path: '/gallery',
                element:<AllGallery></AllGallery>
            
              }
        ]
    }    
]);

export default router;