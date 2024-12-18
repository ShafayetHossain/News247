import { Outlet } from "react-router-dom";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import RightNavbar from "../RightNavbar/RightNavbar";
import Navbar from "../Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
