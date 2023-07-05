import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [cart, setCart] = useState(1);
  const addCart = () => {
    setCart(cart + 1);
  };

  return (
    <NavBar />
  );
};

export default NavBar;
