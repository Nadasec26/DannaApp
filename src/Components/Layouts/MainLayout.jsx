import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footor.jsx";
import { Outlet, useLocation, useParams } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const { id } = useParams();
  const doctor = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const notDoctor = () => {
    return (
      <>
        <Navbar /> <Outlet /> <Footer />
      </>
    );
  };

  return <>{location.pathname === `/doctor/${id}` ? doctor() : notDoctor()}</>;
}
