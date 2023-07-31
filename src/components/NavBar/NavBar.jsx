import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

const NavBar = () => {
  const [cart, setCart] = useState(1);

  return (
    <>
    <div id="navbar">
      <ul>
        <Link to="/">Todos</Link>
        <Link activeClassName="activeNavLink" to="/categories/smartphones">Smartphones</Link>
        <Link activeClassName="activeNavLink" to="/categories/laptops">Laptops</Link>
        <Link activeClassName="activeNavLink" to="/categories/fragrances">Fragrances</Link>
        <Link activeClassName="activeNavLink" to="/categories/skincare">Skincare</Link>
        <Link activeClassName="activeNavLink" to="/categories/groceries">Groceries</Link>
        <Link to="/cart">
          <CartWidget cart={cart} />
        </Link>
      </ul>
    </div>
    <Outlet />
    </>
  );
};

export default NavBar;
