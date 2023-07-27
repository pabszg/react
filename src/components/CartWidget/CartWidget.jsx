import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cart, getTotalItems} = useContext(CartContext)
  console.log(cart.length)
  let totalItems = getTotalItems()
  return (
    <Badge badgeContent={totalItems} color="primary">
      <ShoppingBasketOutlinedIcon />
    </Badge>
  );
};

export default CartWidget;
