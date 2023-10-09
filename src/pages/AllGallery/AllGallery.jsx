
import Footer from "../Footer/Footer";
import Navbar from "../shared/Navbar";


const AllGallery = () => {
    

    
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mt-20  grid grid-cols-2 gap-6 sm:grid-cols-3 md:w-10/12 mx-auto">
            <img className="w-[513px] h-[342px] shadow-xl " src="https://i.ibb.co/3c4HK38/charming-newlyweds-smile-standing-before-wedding-altar.jpg" alt="" />
            <img className="w-[513px] h-[342px] shadow-xl" src="https://i.ibb.co/B6qphM7/rghrtgh.jpg" alt="" />
            <img className="w-[513px] h-[342px] shadow-xl" src="https://i.ibb.co/fDR58zT/anniversary.jpg" alt="" />
            <img className="w-[513px] h-[342px] shadow-xl" src="https://i.ibb.co/qMr8n8r/engagement.jpg" alt="" />
            <img className="w-[513px] h-[342px] shadow-xl" src="https://i.ibb.co/r2CjMp7/retirement.jpg" alt="" />
            <img className="w-[513px] h-[342px] shadow-xl" src="https://i.ibb.co/KGjSHDk/rghrtgh.jpg" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllGallery;