import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
     
        <div>

          <Navbar></Navbar>

          <Outlet></Outlet>

          <div className="mt-16">
          <Footer></Footer>
          </div>
          
        </div>

    </>
  );
};

export default MainLayout;
