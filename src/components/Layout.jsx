import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "./Alert";
import UpdateModal from "./UpdateModal";

const Layout = ({ alert }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Alert alert={alert} />
      <UpdateModal showAlert={alert?.showAlert} />

      {/* Outlet renders child routes */}
      <div className="mx-auto w-full max-w-7xl px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
