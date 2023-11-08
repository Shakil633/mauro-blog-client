// import { useLoaderData } from "react-router-dom";

// const Featured = () => {
//   const featuredData = useLoaderData();
//   console.log(featuredData);
//   return (
//     <div>
//      {
//         featuredData.map(data=> <div key={data._id}>

//             <div>
//                 <h2>{data.full}</h2>
//             </div>
//         </div>)
//      }
//     </div>
//   );
// };

// export default Featured;

// import { useLoaderData } from "react-router-dom";

// function calculateTopPosts(blogData) {
// //   Sort the blogData array by the word count of long_description in descending order
//   blogData.sort((a, b) => b.full.split(' ').length - a.full.split(' ').length);

//   // Return the top 10 posts
//   return blogData.slice(0, 10);
// }

// const Featured = () => {
//   const featuredData = useLoaderData();
//   const topPosts = calculateTopPosts(featuredData);

//   return (
//     <div>
//       <h1>Top 10 Blog Posts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Serial Number</th>
//             <th>Blog Title</th>
//             <th>User Name</th>
//             <th>Profile Picture</th>
//           </tr>
//         </thead>
//         <tbody>
//           {topPosts.map((post, index) => (
//             <tr key={post._id}>
//               <td>{index + 1}</td> {/* Serial Number */}
//               <td>{post.title}</td> {/* Blog Title */}
//               <td>{post.UserName}</td> {/* Blog Owner */}
//               <td>
//                 <img src={post.userProfileImage} alt={`${post.userProfileImage}'s Profile`} />
//               </td> {/* Blog Owner Profile Picture */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Featured;

// import React from "react";
// import { useLoaderData } from "react-router-dom";

// function calculateTopPosts(blogData) {
//   // Sort the blogData array by the word count of 'full' property in descending order
//   blogData.sort((a, b) => b.full.split(' ').length - a.full.split(' ').length);

//   // Return the top 10 posts
//   return blogData.slice(0, 10);
// }

// const Featured = () => {
//   const featuredData = useLoaderData();
//   const topPosts = calculateTopPosts(featuredData);

//   return (
//     <div>
//       <h1>Top 10 Blog Posts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Serial Number</th>
//             <th>Blog Title</th>
//             <th>User Name</th>
//             <th>Profile Picture</th>
//           </tr>
//         </thead>
//         <tbody>
//           {topPosts.map((post, index) => (
//             <tr key={post._id}>
//               <td>{index + 1}</td> {/* Serial Number */}
//               <td>{post.title}</td> {/* Blog Title */}
//               <td>{post.UserName}</td> {/* User Name */}
//               <td>
//                 <img src={post.userProfileImage} alt={`${post.UserName}'s Profile`} />
//               </td> {/* Profile Picture */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Featured;

import { useLoaderData } from "react-router-dom";
import DataTable from "react-data-table-component";
import "./Featured.css";

function calculateTopPosts(blogData) {
  // Sort the blogData array by the word count of 'full' property in descending order
  blogData.sort((a, b) => b.full.split(" ").length - a.full.split(" ").length);

  // Return the top 10 posts
  return blogData.slice(0, 10);
}

const Featured = () => {
  const featuredData = useLoaderData();
  const topPosts = calculateTopPosts(featuredData);

  // Define the columns for your table
  const columns = [
    {
      name: "Serial Number",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Blog Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "User Name",
      selector: "UserName",
      sortable: true,
    },
    {
      name: "Profile Picture",
      cell: (row) => (
        <img
          src={row.userProfileImage}
          alt={`${row.UserName}'s Profile`}
          width="50"
          height="50"
        />
      ),
    },
  ];

  // Create the data object for the DataTable
  const tableData = {
    columns,
    data: topPosts,
  };

  return (
    <div className="lg:px-20 md:px-10 px-5 mt-10 mb-10">
      <h1 className=" text-xl font-bold">Top: {topPosts.length} Post</h1>
      <DataTable {...tableData} />
    </div>
  );
};

export default Featured;
