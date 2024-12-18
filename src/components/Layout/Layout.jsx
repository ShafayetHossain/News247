import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import Navbar from "../Navbar/Navbar";
import RightNavbar from "../RightNavbar/RightNavbar";
const Layout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>

      <main className="grid grid-cols-12 p-4">
        <aside className="col-span-2">
          <LeftNavbar></LeftNavbar>
        </aside>

        <section className="col-span-7">
          <p className="font-semibold text-lg">Dragon News Home</p>
          <div>
            <Outlet></Outlet>
          </div>
        </section>

        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default Layout;
