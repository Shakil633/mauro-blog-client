import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const RegisterPage = () => {
  const { userSingUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserSingUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const img = e.target.image.value;
    const password = e.target.password.value;

    console.log(name, img, email, password);
    //validation
    // if (password.length < 6) {
    //   toast.error('Password must be al least 6 characters')
    //   return;
    // }

    // // creating a new user
    // userSingUp(email, password)
    //   .then(() => {
    //     updateUserProfile(name, img).then(() => {
    //       toast.success("User created successfully");
    //       navigate('/')
    //     });
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      toast.error("Minimum six character, at least one latter and one number ");
    } else {
      if (email) {
        userSingUp(email, password)
          .then(() => {
            updateUserProfile(name, img).then(() => {
              toast.success("User created successfully");
              navigate("/");
            });

            // new user has been created
            const user = { email };
            fetch("https://mauro-blog-server.vercel.app/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200 pb-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left pt-10">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Register now!
          </h1>
        </div>
        <div className="card flex-shrink-0 lg:w-[650px] md:w-[650px] w-[300px] max-w-sm shadow-2xl bg-base-100 mt-5">
          <form onSubmit={handleUserSingUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="input input-bordered"
                name="image"
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
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6 p-0">
              <button className="btn btn-neutral" type="submit">
                Register
              </button>
            </div>
            <label className="label">
              Have an account?
              <Link to="/login" className="label-text-alt link link-hover">
                Please Login
              </Link>
            </label>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
