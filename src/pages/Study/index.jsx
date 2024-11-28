import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "./../../components/Footer/index";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";

const Study = () => {
  return (
    <div>
      <Header />
      <Menu />

      <div className="">
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
};

export default Study;
