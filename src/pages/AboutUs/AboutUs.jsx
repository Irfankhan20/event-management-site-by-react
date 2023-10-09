

const AboutUs = () => {
    return (
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/56tGMYW/about-us.jpg" alt="About Us Image" className="md:w-10/12 object-cover rounded-xl shadow-xl shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 duration-200" />
                    </div>
                    <div className="md:w-1/2 ">
                        <div className="my-8 lg:my-0">
                            <h2 className='text-blue-500 text-2xl md:text-5xl md:mb-6 mb-4'>About Us</h2>
                            <p className="text-gray-700 mb-4">
                            At our event planning service, we are committed to transforming your special moments into unforgettable experiences. Whether it is weddings, birthday parties, anniversaries, engagement parties, retirement celebrations, or baby showers, we infuse every event with creativity and dedication. Our team curates each occasion with meticulous detail, ensuring that every aspect is a reflection of your unique style and vision. From intimate gatherings to grand celebrations, we take pride in crafting memories that will last a lifetime, turning your milestones into extraordinary moments to cherish
                            </p>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;