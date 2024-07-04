import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
