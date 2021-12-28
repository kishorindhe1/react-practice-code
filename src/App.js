// import Main from "./componets/Main/Main";

import { Routes, Route } from "react-router-dom";
import "./assets/css/index.less";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddStudentForm from "./componets/Students/AddStudentForm";
import AllStudentTable from "./componets/Students/AllStudentTable";
import Navbar from "./componets/Navbar/Navbar";
import Slider from "./componets/slider/Slider";
import EditUserDetails from "./componets/User/EditUserDetails";
require("dotenv").config();

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      {/* Same as */} <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/home" element={<AddStudentForm />} />{" "}
        <Route path="/about" element={<AllStudentTable />} />{" "}
        <Route path="/profile" element={<EditUserDetails />} />{" "}
        <Route path="/slider" element={<Slider />} />
      </Routes>{" "}
    </>
  );
}

export default App;
