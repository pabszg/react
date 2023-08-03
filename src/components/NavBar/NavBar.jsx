import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

const NavBar = () => {
  const [cart, setCart] = useState(1);

  return (
    <>
    <div id="navbar">
      <ul>
        <Link to="/">Todos</Link>
        <NavLink to="/categories/smartphones">Smartphones</NavLink>
        <NavLink to="/categories/laptops">Laptops</NavLink>
        <NavLink to="/categories/fragrances">Fragrances</NavLink>
        <NavLink to="/categories/skincare">Skincare</NavLink>
        <NavLink to="/categories/groceries">Groceries</NavLink>
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
