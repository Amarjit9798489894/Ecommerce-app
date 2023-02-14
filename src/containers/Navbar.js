import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const products = useSelector((state) => state.handleCart);
  return (
    <div className="headerNav">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/" className="item">
              Home
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/add-product" className="item">
              Add Product
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/check-out" className="item">
        Cheack Out
      </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <Link to="/aboute-project-and-me" className="item">
        About
      </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/cart" className="item">
              <div className="ui ">
                <i aria-hidden="true" className="shop icon"></i> Cart{" "}
                {/* using length property of array to show how many products are in the cart  */}
                <span className="cartstyle">{products.length}</span>
              </div>
            </Link>
            
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;

