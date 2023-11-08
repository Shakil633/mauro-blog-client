import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import axios from "axios";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  
 
  
 



 
  

  const url = `https://mauro-blog-server.vercel.app/userData/${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyData(res.data);
    });
  }, [url]);

  //
  if (!myData || myData.length == 0) {
    return (
      <p className="text-5xl text-center font-bold mt-[250px]">No Data Here</p>
    );
  }
  //

  const handleDeleted = (id) => {
    //make sure user is confirmed to deleted
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mauro-blog-server.vercel.app/userData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been Deleted.",
                "success"
              );

              // remove the user from the ui
              const remainingUsers = myData.filter((user) => user?._id !== id);
              setMyData(remainingUsers);
            }
          });
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
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 mb-10 lg:px-20 md:px-10 px-5"
    >
      {myData.map((data) => (
        <div key={data._id}>
          <div>
            <div className="card card-compact h-[450px] rounded-lg bg-base-100 shadow-xl border">
              <figure>
                <img className="h-[240px] w-full" src={data.image} alt="" />
              </figure>
              <div className="card-body">
                <h4 className="text-lg text-[#e6a5af] font-semibold">
                  {data.category}
                </h4>
                <h2 className="card-title">{data.title}</h2>
                <p className="text-base">{data.description}</p>

                <div className="card-actions justify-center mt-3">
                  <Link to={`/wishlist/${data._id}`}>
                    <button className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white">
                      Details
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleted(data._id)}
                    className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Wishlist;
