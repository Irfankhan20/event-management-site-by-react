import Footer from "../Footer/Footer";
import Navbar from "../shared/Navbar";


const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 justify-center items-center"> 
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h2 className="font-bold text-3xl text-blue-500 pt-16">Contact Us</h2>
                <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                <p>Town Hall</p>
                <p>Dhaka, Mohammadpur 1207</p>
                <p>Phone: 123-354-56556</p>
                <p>Email: irfan@khan.com</p>
            </div>
            <div className=" border-l-2 pl-9">
                <h2 className="font-bold text-3xl text-blue-500 pt-16">About Us</h2>
                <p><span className='font-bold text-md'>Bio:</span> At our event planning service, we are committed to transforming your special moments into unforgettable experiences. Whether it is weddings, birthday parties, anniversaries, engagement parties, retirement celebrations, or baby showers, we infuse every event with creativity and dedication.</p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;