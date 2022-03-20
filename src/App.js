import React from "react";
import "./App.css";
import StudentLogin from "./Login/studentLogin";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Classes/class";
import ClassDescription from "./Classes/classDescription";
import MainLayout from "./Layout";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route exact path="/" element={<StudentLogin/>} />
        <Route exact path="/class" element={<DashBoard/>} />
        <Route exact path="/classDescription" element={<ClassDescription/>} />
      </Routes>
      </MainLayout>
  );
};

export default App;
