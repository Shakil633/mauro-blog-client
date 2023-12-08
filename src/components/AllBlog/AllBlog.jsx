/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AllBlog = ({ data }) => {
  const { _id, image, category, title, description, full } = data;

  const { user } = useContext(AuthContext);

  const info = {
    id: _id,
    image,
    category,
    full,
    title,
    description,
    email: user?.email,
  };
  console.log("all data here", info);

  const handleAllBlogAdded = () => {
    console.log(info);
    fetch("https://mauro-blog-server.vercel.app/userData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully");
        }
      });
  };

  // Animation
  const fadeUp = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
      <div className="card card-compact h-[450px] rounded-lg bg-base-100 shadow-xl border">
        <figure>
          <img className="h-[240px] w-full" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h4 className="text-lg text-[#e6a5af] font-semibold">{category}</h4>
          <h2 className="card-title">{title}</h2>
          <p className="text-base">{description}</p>
          <div className="card-actions justify-center mt-3">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white">
                Details
              </button>
            </Link>
            <button
              onClick={handleAllBlogAdded}
              className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllBlog;
