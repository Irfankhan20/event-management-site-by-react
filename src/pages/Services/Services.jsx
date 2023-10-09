import { Link } from "react-router-dom";



const Services = ({ service }) => {
    const {id, title, img, rating, number_of_purchase, price } = service;

    return (
        <div className="my-16 md:w-94 w-11/12 mx-auto">
            
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="object-cover image-full w-[485px] h-[485px]" src={img} alt="image" /></figure>
                <div className="card-body">
                <h2 className="card-title">
                    {title}
                <div className="badge text-white bg-blue-500 border-none py-3">{rating} Star</div>
                </h2>
                <p>Number Of Purchase : {number_of_purchase} </p>
                <p>Price : {price}$</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${id}`}>
                        <button className="border border-blue-500 rounded-full px-3 py-1 hover:text-white hover:bg-blue-500 duration-300">Service Details</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;