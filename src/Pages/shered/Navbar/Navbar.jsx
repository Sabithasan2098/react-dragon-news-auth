import { Link, NavLink } from "react-router-dom";
import defaultUserPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../probider/Authprovider";

const Navbar = () => {
  const{user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
 
    const NavLinks = <>
      <li><NavLink to={"/"}>Home</NavLink></li>  
      <li><NavLink to={"/about"}>About</NavLink></li>  
      <li><NavLink to={"/carear"}>Carear</NavLink></li>  
      <li><NavLink to={"/login"}>login</NavLink></li>  
      <li><NavLink to={"/register"}>Register</NavLink></li>  
      <li><NavLink to={"/adidct"}>Adidct</NavLink></li>  
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             {NavLinks}
          </ul>
        </div>
         
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-10 rounded-full">
          <img src= {defaultUserPic} />
        </div>
      </label>
       {
        user ?  <Link><button className="bg-[#403F3F] px-10 py-2
        text-white font-semibold	text-xl	" onClick={handleLogOut}>Log out</button></Link>
        : <Link to={"/login"}><button className="bg-[#403F3F] px-10 py-2
        text-white font-semibold	text-xl	">Login</button></Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
