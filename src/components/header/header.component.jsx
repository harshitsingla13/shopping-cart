import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../cart/cart.component";

import "./header.styles.css";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();
  const { item } = useSelector((state) => state);

  /**
   * This method is used to navigate to a particular link
   */
  const navigateTo = useCallback((route) => () => navigate(route), [navigate]);

  /**
   * This method is used to toggle cart
   */
  const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);

  return (
    <header className="header">
      {/*<Link className="logo-container" to="/">
      <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
  </Link>*/}
      <div className="logo-container" onClick={navigateTo("/")}>
        <img
          src="/static/images/logo.png"
          alt="Sabka Bazaar logo"
          className="logo"
        />
      </div>

      <nav className="action-nav-list">
        <ul className="nav-list">
          <li>
            <button onClick={navigateTo("/")}>Home</button>
          </li>
          <li>
            <button onClick={navigateTo("/products")}>Products</button>
          </li>
        </ul>
      </nav>

      <div className="cart-login-container">
        <nav className="sign-in-up-buttons">
          <ul className="nav-list">
            <li className="link">
              <button onClick={navigateTo("/login")}>SignIn</button>
            </li>
            <li className="link">
              <button onClick={navigateTo("/register")}>Register</button>
            </li>
          </ul>
        </nav>
        <button className="btn-cart" onClick={toggleCart}>
          <img
            src="static/images/cart.svg"
            alt="cart icon"
            className="icon"
            id="outside"
          />
          <span className="text" id="cart-items">
            {item} Item
          </span>
        </button>

        <div
          id="desktop-cart"
          className="cart-main-cont"
          style={{ display: openCart ? "block" : "none" }}
        >
          {<Cart closeCart={toggleCart} />}
        </div>
      </div>
      <div className={openCart ? "Backdrop" : ""}> </div>
    </header>
  );
};

export default Header;
