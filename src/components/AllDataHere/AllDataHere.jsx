import { useLoaderData } from "react-router-dom";
import AllBlog from "../AllBlog/AllBlog";
import { useState } from "react";

const AllDataHere = () => {
  const allBlog = useLoaderData();
  console.log(allBlog);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const filteredBlogs = allBlog.filter((blog) => {
    // Filter by category
    if (categoryFilter === "all" || blog.category === categoryFilter) {
      // Filter by search text in the title (case-insensitive)
      return blog.title.toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  });

  return (
    <div>
      {/* Category Filter Dropdown */}
      <div className=" flex justify-center mt-10 mb-5">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border p-2 w-1/2 mb-4"
        />

        <div className="mb-4 text-center">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border p-3"
          >
            <option value="all">All Categories</option>
            {/* Add options for each category present in your data */}
            <option value="CAROUSEL">Carousel</option>
            <option value="PEOPLE">People</option>
            <option value="LIFESTYLE">Lifestyle</option>
            <option value="BUSINESS">Business</option>
            <option value="FRIENDS">Friends</option>
            <option value="DESIGN">Design</option>
            <option value="POLITICS">Politics</option>
          </select>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 md:px-10 px-5 mt-10 mb-10">
        {filteredBlogs.map((data) => (
          <AllBlog key={data._id} data={data}></AllBlog>
        ))}
      </div>
    </div>
  );
};

export default AllDataHere;
