

const Banner = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center md:h-screen h-72 banner-image" style={{backgroundImage: 'url("https://i.ibb.co/X71rksz/weeding.jpg")'}}>
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <h1 className="md:w-9/12 mx-auto text-2xl md:text-5xl text-white font-bold leading-tight mb-4 line-">Social event management...! <br />  This is the art of<span className='text-blue-500 italic text-3xl md:text-6xl'>orchestrating memorable</span> gatherings </h1>
      <p className="text-sm md:text-xl text-white mb-8 md:w-8/12 w-10/12 mx-auto">Social event management is the art of orchestrating memorable gatherings that foster connections, celebrate moments, and leave lasting impressions.</p>
      <div className="flex justify-center md:mb-0 ">
        <button className="border border-white hover:bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">View Details</button>
        <button  className="border border-white hover:bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">Our Services</button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;



// import bannerPhoto from '../../assets/banner right side.jpg';
// const Banner = () => {
//     return (
        
//         <div className="text-center gap-10 w-[90%] mx-auto mt-36 grid grid-cols-2 items-center">
//         <div>
//         <h2 className=" text-5xl text-black border-b-2 border-blue-900  pb-10">Planning <br /> <span className="font-bold"><span className='font-semibold text-blue-500'>Educational</span> <br /> Event Management</span></h2>


//         <p className="pt-4 pb-10">Start streaming on-demand video lectures today from top level instructors Attention heatmaps.Education events empower lifelong learning and skill development. </p>
//         <input className="w-[470px] py-4 pl-4 border border-[#DEDEDE] rounded-l-lg" type="text" placeholder="What do you want to learn?" />
//             <button style={{ background: 'linear-gradient(to right, #0074E4, #00B4DB)' }} className=" text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
//         </div>
//         <div className="">
//             <img className='rounded-full' src={bannerPhoto} />
//         </div>
//     </div>

//     );
// };

// export default Banner;