import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shered/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../probider/Authprovider";

const Login = () => {

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate ()

  const{logIn} = useContext(AuthContext)
    const handleLogIn = e =>{
      e.preventDefault()
      const form = new FormData(e.currentTarget)  
      const email = form.get('email')
      const password = form.get('password')
      console.log(email,password);

      logIn(email,password)
      .then(result=>{
        console.log(result);
        
        // click more then navigate this page . jodi see more e click kore login a aso talile login kora 
        // sesh hole see more er oi page e nia jabe r jodi logi page e jea login koro login hoia gela 
        // home page e nia asbe
        navigate(location?.state ? location.state : "/")

      })
      .catch(error=>{
        console.log(error.message);
      })

}
  return (
   <div className="mx-auto lg:w-3/4">
     <Navbar></Navbar>
    <form className="card-body lg:w-1/3 mx-auto"  onSubmit={handleLogIn}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
    <p className="text-center">Do not have an account <Link to={"/register"} className="font-bold text-red-400">Register</Link></p>
   </div>
  );
};

export default Login;
