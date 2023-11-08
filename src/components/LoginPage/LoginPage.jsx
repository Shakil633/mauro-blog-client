import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";


const LoginPage = () => {
    const { userSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleUserSignIn = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
  
      userSingIn(email, password)
        .then(() => {
          toast.success("Login successfully");
          navigate(location?.state ? location.state : "/");
        })
        .catch(() => {
          toast.error("Sorry, your username or password is incorrect.");
        });
    };
    return (
        <div className="hero bg-base-200 pb-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left pt-10">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Login now!
          </h1>
        </div>
        <div className="card flex-shrink-0  lg:w-[650px] md:w-[650px] w-[300px] max-w-sm shadow-2xl bg-base-100 mt-5">
          <form onSubmit={handleUserSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 p-0">
              <button className="btn btn-neutral" type="submit">
                Login
              </button>
            </div>
            <label className="label">
              New here?{" "}
              <Link to="/register" className="label-text-alt link link-hover">
                Create an account
              </Link>
            </label>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;