import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ cart, user }] = useStateValue();

  //console.log(cart);
  
  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      {/* mapping: 
        logo on the left(img), 
        search bar, 
        sign in button/orders/account, 
        cart with a number   */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingCartIcon className="header__cartIcon" />
            <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
