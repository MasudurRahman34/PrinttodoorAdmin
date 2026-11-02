"use client";
import Header from "./Header";
import Sidebar from "./Sidebar";
import withAuth from "@/hoc/withAuth";
import useScreenWidth from "@/hooks/useScreenWidth";
import React, { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  const [screen_size, setScreenSize] = useState(0);
  const screenWidth = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const toggleSidebar = () => {
    if (screenWidth <= 992) {
      setIsOpen(!isOpen);
    } else {
      setHideSidebar(!hideSidebar);
    }
  };

  useEffect(() => {
    setScreenSize(screenWidth);
  }, [screenWidth]);

  return (
    <div className="page">
      <Header hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar
        hideSidebar={hideSidebar}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className={`content main-index`}
        style={{
          marginLeft: screen_size > 992 ? (hideSidebar ? "5rem" : "15rem") : 0,
        }}
      >
        <div className="main-content py-3 min-h-[calc(100vh - 3.75rem)] h-full w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminLayout);
