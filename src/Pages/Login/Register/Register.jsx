import { Link } from "react-router-dom";
import Navbar from "../../shered/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../probider/Authprovider";
 
 

 

const Register = () => {
    const{createUser} = useContext(AuthContext)
    const handleRegister = e =>{
 
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
       
    }
    return (
        <div>
            <div className="mx-auto lg:w-3/4">
     <Navbar></Navbar>
    <form className="card-body lg:w-1/3 mx-auto" onSubmit={handleRegister}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo url</span>
        </label>
        <input
          type="text"
          name="photo"
          placeholder="Enter Your Photo Url"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="enter an Email"
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
          placeholder="Enter a Password"
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
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center">Already have an account? <Link to={"/login"} className="font-bold text-red-400">Login</Link></p>
   </div>
        </div>
    );
};

export default Register;