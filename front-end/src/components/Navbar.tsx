import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <a href="/" className="title">
        <img
          src="https://holidayhub.in/img/general/HolidayHub.png"
          alt="logo"
          style={{ height: "80px" , padding :'7px'}}
        />
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Bookings">Bookings</a>
        </li>
      </ul>

      {/* <div id="log" style={{ marginRight: "30px", display: menuOpen ? "block" : "" }}></div> */}
    </nav>
  );
};

export default Navbar;
