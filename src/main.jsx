import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CategoryNews from "./components/CategoryNews/CategoryNews";
import Provider from "./Provider/Provider";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import DetailsNews from "./components/DetailsNews/DetailsNews";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "/details/:id",
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    element: (
      <PrivateRoute>
        <DetailsNews></DetailsNews>
      </PrivateRoute>
    ),
  },
  {
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth",
        element:<Login></Login>,
      },
      {
        path:"/auth/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
