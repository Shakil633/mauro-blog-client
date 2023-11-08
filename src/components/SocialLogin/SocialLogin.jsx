import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((res) => {
        toast.success("Login successfully");
        navigate(location?.state ? location.state : "/");

        // new user has been social login
        //  const user = { email };
        fetch("https://mauro-blog-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(res.user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch(() => {
        toast.error("Authentication failed. Please try again.");
      });
  };
  return (
    <div>
      <div className="divider">continue with</div>
      <div className=" flex justify-center mt-5">
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-neutral btn-sm "
        >
          Google login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
