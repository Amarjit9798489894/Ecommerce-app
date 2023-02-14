import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // getting products of cart from redux state
  const products = useSelector((state) => state.handleCart);

  return (
    <div className="ui menu">
      <h1 className="active item ui header">Shopping Villa</h1>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/add-product" className="item">
        Add Product
      </Link>
      <Link to="/cart" className="item">
        <div className="ui ">
          <i aria-hidden="true" className="shop icon"></i> Cart{" "}
          {/* using length property of array to show how many products are in the cart  */}
          {products.length}
        </div>
      </Link>
      <Link to="/check-out" className="item">
        Cheack Out
      </Link>
      <Link to="/aboute-project-and-me" className="item">
        About
      </Link>
    </div>
  );
};

export default Header;
