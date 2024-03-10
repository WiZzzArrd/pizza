import React from "react";
import Header from "../components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='container'>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
