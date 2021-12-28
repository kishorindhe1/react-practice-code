import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AddStudentForm from "./Students/AddStudentForm";
import AllStudentTable from "./Students/AllStudentTable";

const AllComponets = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={AddStudentForm } />
        <Route path="/about" element={AllStudentTable} />
      </Routes>{" "}
    </div>
  );
};

export default AllComponets;
