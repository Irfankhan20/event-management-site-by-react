import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";



const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    
    return (
        <div>
            <Navbar></Navbar>
            
                
            
                    
            
              
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    

                    <div className="md:w-1/2 w-full ">
                    <h1 className="text-4xl font-bold italic text-center">Register Now...!</h1>
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleRegister} className="card-body">

                                {/* name box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* photo url box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Photo URL</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    
                                    <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* email box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-blue-500 text-white border-none">Required</span>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>

                                 {/* password box  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>

                                   <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-blue-500 text-white border-none">Required</span>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    </div>
                                    
                                    {/* forgot password  */}
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                {/* login btn  */}
                                <div className="mt-6 form-control">
                                    <button className="border border-blue-500 hover:bg-blue-500 px-10 hover:text-white text-blue-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                                </div>
                                <div className='text-center  mt-6'>
                                   

                                    
                            <div>

                                {/* new here link  */}
                                <p className='text-sm'> <span className=' text-blue-500'>Have an Account ?</span> <Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                                </Link></p>
                            </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* right side part  */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-end text-center'>Welcome to <span className='text-blue-500 font-bold italic'>IRFANs</span></h1>
                        <p className="text-blue-500 text-xl md:text-end text-center font-bold">Enjoy your life</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;