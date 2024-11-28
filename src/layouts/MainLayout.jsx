import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Search from "../components/Search";

const MainLayout = ({ children }) => {
  return (
    <div className="relative ">
      <Header />
      <Menu />
      <Search />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
