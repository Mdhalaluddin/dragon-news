import { Link } from "react-router-dom";
import Navbar from "../../Sheared/Navber/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../firebase/AuthProvider";


const Register = () => {
    const {createUser}= useContext(AuthContext)
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
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        });
    
        
    }
   
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-5">Please Register</h2>
            {/*--------------- form ---------------------*/}
            <div className=" bg-base-200">
                <div className="md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="Text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already have an account<Link to="/login"><span className="btn btn-link font-semibold">Login</span> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;