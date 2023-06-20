import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <Badge badgeContent={100} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
};

export default CartWidget;
