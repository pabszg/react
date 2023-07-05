import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log("NAV")
  const [cart, setCart] = useState(1);

  return (
    <>
    <div id="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/categories/smartphones">Smartphones</Link>
        <Link to="/categories/laptops">Laptops</Link>
        <Link to="/categories/fragrances">Fragrances</Link>
        <Link to="/categories/skincare">Skincare</Link>
        <Link to="/categories/groceries">Groceries</Link>
        <li>
          <CartWidget cart={cart} />
        </li>
      </ul>
    </div>
    <Outlet />
    </>
  );
};

export default NavBar;
