import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const BlogData = ({ blog }) => {
  const { _id, title, image, description, category, full } = blog;

  const { user } = useContext(AuthContext);

  const info = {
    id: _id,
    image,
    full,
    category,
    title,
    description,
    email: user?.email,
  };

  const handleAddedBlog = () => {
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

  return (
    <div>
      <div className="card card-compact h-[450px] rounded-lg bg-base-100 shadow-xl border">
        <figure>
          <img className="h-[240px] w-full" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h4 className=" text-lg text-[#e6a5af] font-semibold">{category}</h4>
          <h2 className="card-title">{title}</h2>
          <p className=" text-base">{description}</p>
          <div className="card-actions justify-center mt-3">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white">
                Details
              </button>
            </Link>
            <button
              onClick={handleAddedBlog}
              className="btn bg-[#b5838d] hover:bg-[#a66a76] btn-sm text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogData;
