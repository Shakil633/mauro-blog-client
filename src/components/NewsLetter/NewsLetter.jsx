import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {

  const [email, setEmail] = useState("");
  const handleSubscribeClick = () => {
    if (email === "") {
      toast.error("Please enter a valid email address.", {});
      return;
    }
    const emailSent = true;
    if (emailSent) {
      toast.success("Thanks for subscribing to our newsletter", {});
    }
  };

  return (
    <div className="mt-20 mb-10">
      {/* <section className="bg-gray-200 py-12 rounded-2xl">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news and updates. Join our newsletter
            today!
          </p>
          <div className="flex">
            <input
              type="email"
              className="w-full py-3 px-4 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button
              className="bg-blue-500 text-white py-3 px-4 rounded-r-md hover:bg-blue-600"
              type="submit"
              onClick={handleSubscribeClick}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-200 py-12 rounded-2xl">
        <div className="container mx-auto">
          <h2 className="lg:text-2xl md:text-2xl text-xl px-3 font-bold text-gray-800 mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 px-3 text-center">
            Stay updated with the latest news and updates. Join our newsletter
            today!
          </p>
          <div className="flex px-3 text-center justify-center">
            <input
              type="email"
              className="lg:w-full md:w-full w-[160px] py-3 px-4 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-3 px-4 rounded-r-md hover:bg-blue-600"
              type="submit"
              onClick={handleSubscribeClick}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
