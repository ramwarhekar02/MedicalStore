import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Advertise from "./Components/Advertise";
import Whatsapp from "./Components/WhatsApp"

export default function App() {
  return (
    <>
      <Navbar />
      <Advertise />
      <Outlet />
      <Footer />
      <Whatsapp/>
    </>
  );
}
