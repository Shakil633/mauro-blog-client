import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const WishlistDetails = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`https://mauro-blog-server.vercel.app/userData/${user?.email}`)
      .then((res) => res.json())
      //   .then((data) => setMyData(data));
      .then((data) => setMyData(data));
  }, [user]);

  return (
    <div>
      {myData.map((data) => (
        <div key={data._id}>
          <div className="lg:px-28 md:px-10 px-5 mt-16 mb-28">
            <div className="">
              <img
                className=" w-[40%] mx-auto rounded-lg"
                src={data.image}
                alt=""
              />
            </div>

            <div>
              <h2 className=" md:text-3xl text-2xl font-semibold mt-6">
                {data.title}
              </h2>
              <p className=" md:text-base text-sm font-normal mb-5 mt-3">
                {data.description}
              </p>

              <p className=" md:text-base text-sm font-normal mb-5 mt-3">
                {data.full}
              </p>

              <div>
                <Link to={"/"}>
                  <button className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistDetails;
