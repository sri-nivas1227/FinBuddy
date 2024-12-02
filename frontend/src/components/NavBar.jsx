import React, { useState } from "react";
import MiniLogo from "/src/assets/logo/mini-logo.png";
import ProfileDark from "/src/assets/icons/profile-dark.png";
import LoginIcon from "/src/assets/icons/login.png";
import ProfileMenu from "./ProfileMenu";
const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <nav className="bg-gray-300 p-4 flex justify-between items-center">
      <div
        onClick={() => (window.location.href = "/")}
        className="flex items-center cursor-pointer"
      >
        <img
          src={MiniLogo}
          alt="Logo"
          className="pointer-events-none w-28 mr-2"
        />
      </div>
      <div>
        {localStorage.getItem("token") ? (
          <div className="">
            <img
              src={ProfileDark}
              alt="Profile"
              className="h-8 w-8 rounded-full"
              onClick={() => setShowProfile(!showProfile)}
            />
            {showProfile ? <ProfileMenu /> : null}
          </div>
        ) : (
          <div
            onClick={() => {
              window.location.href = "/login";
            }}
            className="group grid grid-flow-row justify-center"
          >
            <img src={LoginIcon} alt="Login" className="w-8" />
            <div className="hidden group-hover:block fixed font-semibold right-2 top-14">
              Login
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
