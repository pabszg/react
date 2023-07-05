import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const CartWidget = ({ cart }) => {
  return (
    <Badge badgeContent={cart} color="primary">
      <ShoppingBasketOutlinedIcon />
    </Badge>
  );
};

export default CartWidget;
