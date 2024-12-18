import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Provider/Provider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(true);
  const { signInUser, resetPassword } = useContext(ContextProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success(`Login Successfully!`, {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(`${error.message}!`, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      });
  };


  const handleResetPassword = () => {

    const email = emailRef.current.value;
    if(!email){
      toast.warn("Please input email first.!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
    else{
      resetPassword(email);
      toast.success("Sent email successfully.!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
            ref={emailRef}
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type={viewPassword ? "password" : "text"}
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
            <button type="button" className="hover:text-red-500" onClick={handleResetPassword}>forget password.?</button>

            <button
              type="button"
              onClick={() => setViewPassword(!viewPassword)}
              className="absolute right-4 bottom-9"
            >
              {viewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t Have An Account?{" "}
          <Link
            to="/auth/registration"
            className="text-red-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
