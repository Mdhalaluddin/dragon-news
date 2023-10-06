import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Sheared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('localtion pabo', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="2xl">Please Login</h2>
            {/*--------------- form ---------------------*/}
            <div className=" bg-base-200">
                <div className="md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account<Link to="/register"><span className="btn btn-link font-semibold">Register</span> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;