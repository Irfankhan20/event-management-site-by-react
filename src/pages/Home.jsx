
import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./banner/Banner";
import Footer from "./Footer/Footer";
import './Home.css'

import Navbar from "./shared/Navbar";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";




const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            
            
            <div className="banner-container">
            <div className="banner-overlay">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            
                <div className="my-16 md:my-20 md:w-10/12 w-11/12 mx-auto ">
                    <h2 className="text-blue-500 text-2xl md:text-5xl text-center">All Services</h2>
                <div className="grid lg:grid-cols-3 justify-items-center">
                
                {services.map(service => <Services key={service.id} service={service}></Services>)}
                </div>
                </div>

            
            <Gallery></Gallery>
            <Footer></Footer>
            </div>
            </div>
        </div>
    );
};

export default Home;