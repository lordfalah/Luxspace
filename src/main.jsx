import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Index, { loaderDetailProduct } from "./pages/products/Index";
import "./assets/css/App.css";
import { getProducts } from "./api/baseApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/cart/Cart";
import Congratulation from "./pages/congratulation/Congratulation";
import Header from "./parts/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Fragment>
        <Header category={[]} />
        <ErrorPage nameImg={"errorPage.svg"} description={"Back to Home"} />
      </Fragment>
    ),
    loader: () => getProducts("categories/?page=1&limit=4"),
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => getProducts("products/?page=1&limit=10"),
      },
      {
        path: "products/:id",
        element: <Index />,
        errorElement: (
          <ErrorPage nameImg={"notFound.svg"} description={"Back to Shop"} />
        ),
        loader: loaderDetailProduct,
      },
      {
        path: "cart/",
        element: <Cart />,
      },
      {
        path: "congratulation/",
        element: <Congratulation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
