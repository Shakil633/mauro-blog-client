import NewsLetter from "../NewsLetter/NewsLetter";
import { motion } from "framer-motion";
import "./Banner.css";
import {
  BsQuote,
  BsFillTagsFill,
  BsFillShareFill,
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import BlogData from "../BlogData/BlogData";
import { useEffect, useState } from "react";

const Banner = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    // Fetch blog data from your API
    fetch("https://mauro-blog-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        // Reverse the order of the blog posts (most recent added first)
        data.reverse();
        setBlogPosts(data);
      });
  }, []);

  // Update newData whenever blogPosts change
  useEffect(() => {
    setNewData([...blogPosts]);
  }, [blogPosts]);

  // Only get the last 6 data
  const recentBlogs = newData.slice(0, 6);

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
    <div className="lg:px-20 md:px-10 px-5 ">
      <div className=" flex lg:flex-row md:flex-row flex-col items-center gap-10  mt-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h4 className=" text-[#e59b9e] text-2xl font-medium">POLITICS</h4>
          <h2 className=" lg:text-4xl md:text-4xl text-2xl lg:w-[420px] md:w-[420] w-[300px] font-bold mt-3 mb-3">
            Why product thinking is the next big thing in UX.
          </h2>
          <p className=" lg:text-4xl md:text-4xl text-2xl font-light">
            Donec eros turpis, dictum <br /> vel vehicula viverra, <br />
            facilisis in mauri…
          </p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <img
            className=" rounded-2xl w-[750px] h-[380px]"
            src="https://i.ibb.co/gw6Ct2V/img-f.jpg"
            alt=""
          />
        </motion.div>
      </div>

      {/* 6 blog section */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show">
        <h2 className=" text-2xl font-semibold">Recent blog posts section</h2>
        <hr className=" border border-red-500 w-[280px] mt-2" /> <hr />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 mb-20 gap-5"
      >
        {recentBlogs.map((blog) => (
          <BlogData key={blog._id} blog={blog}></BlogData>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className=" mt-10"
      >
        <h2 className=" text-2xl font-medium">Recent posts</h2>
        <hr className=" border border-red-500 w-[140px] mt-2" /> <hr />
        <div className="bannerBg w-full lg:h-[600px] md:h-[600px] h-[400px] mt-10 rounded-2xl">
          <div className="lg:pt-[400px] md:pt-[400px] pt-[150px] ml-10">
            <h4 className=" text-xl font-semibold mb-3 text-white">DESIGN</h4>
            <span className=" lg:text-4xl md:text-4xl text-2xl text-white font-bold">
              Is Britain’s likely next leader a great brain <br /> or an
              opportunist?{" "}
              <span className=" lg:text-4xl md:text-4xl text-lg font-light">
                Lorem ipsum dolor sit <br /> amet, consectetur adipisc…
              </span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* news letter section */}

      <motion.div variants={fadeUp} initial="hidden" whileInView="show">
        <NewsLetter></NewsLetter>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show">
        <h2 className=" text-2xl font-bold">The Power of Blogger Editor</h2>
        <p className=" text-xl py-4 font-light">
          Donec facilisis leo et bibendum pretium. Suspendisse ligula neque,
          ultrices nec interdum faucibus, pharetra et libero. Vestibulum viverra
          molestie nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec eros turpis, dictum vel vehicula viverra, facilisis in
          mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis dignissim
          non. Phasellus deserunt. Convallis perspiciatis fusce fermentum
          accumsan, arcu aliquam, velit venenatis augue proin, enim etiam dolor.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="bg-[#ffcdb2] py-16 px-5 mt-8 mb-10 flex rounded"
      >
        <div>
          <span>
            <BsQuote className="w-[60px] h-[60px] -mt-[20px] opacity-20"></BsQuote>
          </span>
        </div>
        <p className=" text-xl font-normal text-black">
          Proin consequat purus sit amet blandit sollicitudin. Aliquam in
          consequat libero. Morbi sollicitudin dignissim erat laoreet interdum.
          Phasellus magna velit, consectetur iaculis tincidunt placerat, semper
          non sem. Mauris in eleifend libero. Mauris vitae nibh sed felis
          aliquet dictum sed egestas mauris. Sed varius est ac nulla eleifend
          sagittis. Praesent id aliquam eros, in semper est.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className=" mb-20 bg-[#fff5cf] py-12 px-8 rounded-2xl"
      >
        <p className=" border-2 border-[#b5838d] w-[60px] mb-5"></p>
        <div className=" flex items-center gap-2">
          <div>
            <span>
              <BsFillTagsFill className="text-black"></BsFillTagsFill>
            </span>
          </div>
          <span className=" text-xl text-black">
            Tags:{" "}
            <span className=" text-xl font-bold text-black">
              Business, Carousel
            </span>
          </span>
        </div>
        <div className="mt-5">
          <p className=" border-dashed border  border-black"></p>
        </div>

        <div className=" flex justify-between items-center mt-5">
          <div className=" flex items-center gap-3">
            <span>
              <BsFillShareFill className=" text-black"></BsFillShareFill>
            </span>
            <span className=" lg:text-xl md:text-xl text-lg font-bold text-black">
              Share
            </span>
          </div>
          <div className=" flex gap-5">
            <span>
              <BsFacebook className="lg:w-[30px] md:w-[30px] w-[20px] lg:h-[30px] md:h-[30px] h-[20px] text-[#516eab]"></BsFacebook>
            </span>
            <span>
              <BsTwitter className="lg:w-[30px] md:w-[30px] w-[20px] lg:h-[30px] md:h-[30px] h-[20px] text-[#29c5f6]"></BsTwitter>
            </span>
            <span>
              <BsWhatsapp className="wlg:w-[30px] md:w-[30px] w-[20px] lg:h-[30px] md:h-[30px] h-[20px] text-[#25d366]"></BsWhatsapp>
            </span>
            <span>
              <BsLinkedin className="lg:w-[30px] md:w-[30px] w-[20px] lg:h-[30px] md:h-[30px] h-[20px] text-[#0077b5]"></BsLinkedin>
            </span>
          </div>
        </div>
        <div className="mt-5">
          <p className=" border-dashed border  border-black"></p>
        </div>

        <div className=" flex justify-between mt-5 mb-3">
          <div className=" flex items-center gap-1">
            <span>
              <AiOutlineLeft className="text-black"></AiOutlineLeft>
            </span>
            <span className="text-black font-bold">Newer</span>
          </div>

          <div className=" flex items-center gap-1">
            <span className="text-black font-bold">Older</span>
            <span>
              <AiOutlineRight className="text-black"></AiOutlineRight>
            </span>
          </div>
        </div>

        <div className=" flex  justify-between">
          <h2 className=" text-start lg:text-xl md:text-xl text-lg font-bold text-black">
            Duis tempor purus rutrum, <br /> tincidunt lacus.
          </h2>
          <h2 className=" text-end lg:text-xl md:text-xl text-lg font-bold text-black">
            Morbi lobortis ultricies urna, <br /> neque aliquam sit amet.
          </h2>
        </div>
        <div className="mt-5">
          <p className=" border-dashed border  border-black"></p>
        </div>

        <div className=" flex lg:flex-row md:flex-row flex-col items-center gap-5 mt-5">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/0s9bDCF/avatar.jpg" />
            </div>
          </div>
          <div>
            <h2 className="text-black text-xl font-bold">John Doe</h2>
            <p className="text-[#434036] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis leo et bibendum pretium. Suspendisse ligula neque,
              ultrices nec interdum faucibus.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className=" border-dashed border  border-black"></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;

// import { useState, useEffect } from "react";
// import BlogData from "../BlogData/BlogData";

// const Banner = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [newData, setNewData] = useState([]);

//   useEffect(() => {
//     // Fetch blog data from your API
//     fetch("https://mauro-blog-server.vercel.app/blogs")
//       .then((res) => res.json())
//       .then((data) => {
//         // Reverse the order of the blog posts (most recent added first)
//         data.reverse();
//         setBlogPosts(data);
//       });
//   }, []);

//   // Update newData whenever blogPosts change
//   useEffect(() => {
//     setNewData([...blogPosts]);
//   }, [blogPosts]);

//   // Only get the last 6 data
//   const recentBlogs = newData.slice(0, 6);

//   return (
//     <div className="px-20">
//       {/* ... (rest of your component code) ... */}
//       <div className="grid grid-cols-3 mt-10 mb-20 gap-5">
//         {recentBlogs.map((blog) => (
//           <BlogData key={blog._id} blog={blog}></BlogData>
//         ))}
//       </div>
//       {/* ... (rest of your component code) ... */}
//     </div>
//   );
// };

// export default Banner;
