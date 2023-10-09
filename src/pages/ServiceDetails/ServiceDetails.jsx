import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";


const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    
    const service = services.find((c) => c.id == id);
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-10/12 mx-auto py-14">
            <div className="mx-auto">
                <div className="mx-auto lg:flex lg:flex-row items-center rounded-3xl  shadow-md py-6 px-10 gap-10">
                    <div className="md:w-1/2">
                        <img src={service.img} alt="" />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-blue-500 text-4xl italic pb-2">{service.title}</h1>
                        <p className="text-sm text-justify pb-3"><span className="font-bold text-md">Bio:</span> {service.description}</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
