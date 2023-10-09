


import { useContext } from 'react';
import './Navber.css'
import { Link, NavLink, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';





const Navbar = () => {
    
    
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(err => console.log(err))
    }
    return (
        <div>
            {/* navbar  */}
            <div className="bg-blue-600 ">
                <div className="navbar w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="lg:hidden text-white p-12"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu gap-8 items-center menu-compact dropdown-content mt-3 shadow bg-blue-600 rounded w-40"
                            >
                                <li>
                                    <NavLink
                                        to="/" className="normal-case text-xl text-white" activeClassName="active">
                                        Home
                                    </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink
                                        to= "service/:id"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                       Service Details 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                       Contact Us 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link className="md:w-3/12 w-8/12" to="https://delizioso-resturent.web.app/"><img src="https://i.ibb.co/2gytMjj/logo.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-8 items-center px-1">
                            <>
                                <NavLink
                                    exact
                                    to="/"
                                    className="normal-case text-xl  px-6 py-1 text-white"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </>
                            
                            <>
                            <NavLink
                                        to="/service"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                       Service Details 
                                    </NavLink>
                            </>
                            <>
                            <NavLink
                                        to="/contact"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                       Contact Us 
                                    </NavLink>
                            </>

                        </ul>
                    </div>
                    <div className="navbar-end rounded-full">
                    {user ? <button onClick={handleLogOut} className="normal-case text-xl px-6 py-1 text-white" 
                                >Logout</button> :
                                <Link to='/login'>
                                    <button className="normal-case text-xl px-6 py-1 text-white" 
                                        >Login</button>
                                </Link>
                            }
                    </div>
                </div>
            </div>
            {/* navbar  */}
        </div>
    );
};

export default Navbar;













