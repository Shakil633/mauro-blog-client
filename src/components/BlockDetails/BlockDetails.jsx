import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BlockDetails = () => {
  const blogDataLoad = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, image, title, description, full, userEmail } = blogDataLoad;

  const blogUser = user.email;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const comment = form.comment.value;

    console.log(name, image, comment);

    const blogComment = {
      name,
      comment,
      user: user?.email,
      image,
    };
    console.log(blogComment);
    //
    // send data to server
    fetch("https://mauro-blog-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your Comment Paste is Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  //
  const [allComment, setAllComment] = useState([]);
  useEffect(() => {
    fetch("https://mauro-blog-server.vercel.app/comments")
      .then((res) => res.json())
      .then((data) => setAllComment(data));
  }, [allComment]);

  console.log("hello comment", allComment);

  return (
    <div>
      <div className="lg:px-28 md:px-10 px-5 mt-16 mb-28">
        <div>
          <img className="w-[60%] mx-auto rounded-lg" src={image} alt="" />
        </div>

        <div>
          <h2 className="md:text-3xl text-2xl font-semibold mt-6">{title}</h2>

          <p className="text-xl font-bold mt-8"> Short Description</p>
          <p className="md:text-base text-sm font-normal mb-5">{description}</p>

          <p className="text-xl font-bold mt-8">Long Description</p>
          <p className="md:text-base text-sm font-normal mb-5">{full}</p>

          <div>
            <div>
              {blogUser === userEmail && (
                <>
                  <Link to={`/update/${_id}`}>
                    <button
                      type="submit"
                      className="btn bg-[#d33e90] hover:bg-[#bd3781] text-white"
                    >
                      Update
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-2">Comment Now</h2>
          </div>
          <div>
            {user?.email === userEmail ? (
              <p>Can't comment on your own blog</p>
            ) : (
              <form
                onSubmit={handleCommentSubmit}
                className=" border-2 px-5 py-5"
              >
                <div>
                  <input
                    placeholder="Add Name"
                    type="text"
                    name="name"
                    className="mb-5 border-2 py-2 px-3 rounded w-1/2"
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Img Url"
                    name="image"
                    className="mb-5 border-2 py-2 px-3 rounded w-1/2 "
                  ></input>
                </div>
                <div>
                  <textarea
                    placeholder="Add a comment..."
                    name="comment"
                    className="mb-5 border-2 py-2 px-3 rounded w-1/2"
                  ></textarea>
                </div>

                <button className="btn btn-outline btn-accent">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Comment section */}

      <div className="px-20 text-center">
        <h2 className="text-xl font-bold mt-8 mb-4">Comments</h2>
        {allComment.map((comments) => (
          <div key={comments._id}>
            <p className="mb-5 text-center">{comments.name}</p>

            <img
              className="w-24 h-[90px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto"
              src={comments.image}
              alt={comments.comment}
            />

            <p className="mt-5 w-1/2 mx-auto mb-10">{comments.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockDetails;