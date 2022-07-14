import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  console.log(user);

  const handlelogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      {/* <Link to="/home">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Hartley
        </h1>
      </Link> */}
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        Hartley
      </h1>

      {user?.email ? (
        <div>
          <button
            onClick={handlelogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
