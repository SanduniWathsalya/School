import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Product</a>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;