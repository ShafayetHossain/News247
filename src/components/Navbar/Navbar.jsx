import { NavLink } from "react-router-dom";
import user from "../../assets/user.png";
import { useContext } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { userAcount, signOutUser } = useContext(ContextProvider);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success(`SignOut Successfully!`, {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        });
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
    <div className="flex justify-between items-center p-4">
      <div>
        <h1>{userAcount?.email}</h1>
      </div>
      <div className="space-x-4 text-gray-500">
        <NavLink to={"/category/01"} className="rounded-lg px-3">
          Home
        </NavLink>
        <NavLink to={"/about"} className="rounded-lg px-3">
          About
        </NavLink>
        <NavLink to={"/career"} className="rounded-lg px-3">
          Career
        </NavLink>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        {
          userAcount?<img className="w-9 rounded-full" src={userAcount.photoURL} alt="" />:<img src={user} alt="" />
        }
        {userAcount ? (
          <button
            onClick={handleSignOut}
            className="bg-gray-600 text-white font-semibold px-5 py-1"
          >
            LogOut
          </button>
        ) : (
          <NavLink to={"/auth"}>
            <button
              className="bg-gray-600 text-white font-semibold px-5 py-1"
            >
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
