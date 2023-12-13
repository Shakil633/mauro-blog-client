import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import AuthProvider from "./Provider/AuthProvider";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import AddBlog from "./components/AddBlog/AddBlog";
import Featured from "./components/Featured/Featured";
import Wishlist from "./components/Wishlist/Wishlist";
import Banner from "./components/Banner/Banner";
import Error from "./components/Error/Error";
import AllDataHere from "./components/AllDataHere/AllDataHere";
import BlockDetails from "./components/BlockDetails/BlockDetails";
import WishlistDetails from "./components/WishlistDetails/WishlistDetails";
import UpdatePage from "./components/UpdatePage/UpdatePage";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import WinTicket from "./components/Comment/WinTicket/WinTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/winTicket",
        element: <WinTicket></WinTicket>,
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            <AddBlog></AddBlog>
          </PrivetRoute>
        ),
      },
      {
        path: "/all-blog",
        element: <AllDataHere></AllDataHere>,
        loader: () => fetch("https://mauro-blog-server.vercel.app/blogs"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <BlockDetails></BlockDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://mauro-blog-server.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdatePage></UpdatePage>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://mauro-blog-server.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/wishlist/:id",
        element: <WishlistDetails></WishlistDetails>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
        loader: () => fetch("https://mauro-blog-server.vercel.app/blogs"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRoute>
            <Wishlist></Wishlist>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
