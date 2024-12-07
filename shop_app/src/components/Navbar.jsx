import React from "react";

const Navbar = ({ credit }) => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo + Buttons */}
      <div className="left">
        <div className="logo">MyStore</div>
        <div className="nav-buttons">
          <button>Home</button>
          <button>Products</button>
          <button>Contact</button>
        </div>
      </div>

      {/* Right Section: Credit */}
      <div className="right">
        <span>Credit: ${credit}</span>
      </div>
    </nav>
  );
};

export default Navbar;
