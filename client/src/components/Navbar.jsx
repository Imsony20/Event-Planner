import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
 
  return (
    <>
      <div className="bg-transparent flex justify-center gap-10 ml-10 text-xl items-center sticky top-4 z-99">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        
        
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>


        <button className="border p-2 rounded-md" 
        onClick={()=> navigate("login")}>{" "}Login to Plan Now!{" "}</button>
        
      </div>
    </>
  );
};

export default Navbar;