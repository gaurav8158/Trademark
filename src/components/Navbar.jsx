import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#d8dce0] p-3  mx-auto flex items-center justify-between">
      <div className="pl-5 flex items-center">
        <p className="font-semibold text-2xl font-serif">
          Trademark Matter List
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mr-4">
        <Link  to="/login">
          {" "}
          <Button className="w-28">Login</Button>
        </Link>
        <Link to="/register">
          <Button className="w-28" variant="outlined">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
