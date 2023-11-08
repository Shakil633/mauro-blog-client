import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const update = useLoaderData();
  const { _id, title, category, description, full, image } = update;
  console.log(update);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const full = form.full.value;
    const image = form.image.value;
    console.log(title, category, description, full, image);
    const blogProduct = {
      title,
      category,
      description,
      full,
      image,
    };
    console.log(blogProduct);
    // send data to server
    fetch(`https://mauro-blog-server.vercel.app/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className=" bg-[#F4F3F0] lg:p-24 md:p-24 p-5">
      <form onSubmit={handleUpdate}>
        {/* form name and brand name row */}
        <div className=" lg:flex md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Title"
                defaultValue={title}
                name="title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* 
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Category Name"
              name="category"
              className="input input-bordered w-full"
            />
          </label>
        </div> */}

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="py-3 px-2 rounded-lg rounded-l border-2"
              name="category"
              defaultValue={category}
            >
              <option value="CAROUSEL">Carousel</option>
              <option value="PEOPLE">People</option>
              <option value="LIFESTYLE">Lifestyle</option>
              <option value="BUSINESS">Business</option>
              <option value="FRIENDS">Friends</option>
              <option value="DESIGN">Design</option>
            </select>
          </div>

          {/* <div>
          <label>Category:</label>

          <select
            name="category"
          >
            <option value="CAROUSEL">Carousel</option>
            <option value="PEOPLE">People</option>
            <option value="LIFESTYLE">Lifestyle</option>
            <option value="BUSINESS">Business</option>
            <option value="FRIENDS">Friends</option>
          </select>
        </div> */}
        </div>

        {/* form category and price row */}
        <div className=" md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short Description"
                name="description"
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Full Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Full Description"
                name="full"
                defaultValue={full}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form image url row */}
        <div className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
                name="image"
                defaultValue={image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-block mt-5 bg-[#b5838d] hover:bg-[#a66a76] text-white"
        />
      </form>
    </div>
  );
};

export default UpdatePage;
