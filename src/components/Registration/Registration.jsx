import React, { useContext } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUser, updateUser } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        updateUser(name, photo);
        toast.success(`Create User Successfully!`, {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        });

        navigate("/");
      
      })
      .catch((error) => {
        toast.error(`${error.message}!`, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="Name"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="Name"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="Photo"
            >
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              id="Photo"
              placeholder="Enter your photo Url"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            SignUp
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Already Have An Account?{" "}
          <Link to="/auth" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
