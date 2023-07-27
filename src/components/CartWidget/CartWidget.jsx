import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  console.log(cart.length)

  return (
    <Badge badgeContent={cart.length} color="primary">
      <ShoppingBasketOutlinedIcon />
    </Badge>
  );
};

export default CartWidget;
