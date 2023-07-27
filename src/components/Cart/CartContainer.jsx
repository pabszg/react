import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartContainer = () => {
  const { cart, clearCart, deleteById, onAdd, getTotalPrice, getTotalItems } = useContext(CartContext);

  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  let total = getTotalPrice()
  let totalItems = getTotalItems()

  const increaseQty = (item)=> {
    item.quantity < item.stock ? onAdd(item, item.quantity + 1) : alert("supera el stock máximo")
  }
  const decreaseQty = (item)=> {
    item.quantity > 1 ? onAdd(item, item.quantity - 1) : deleteById(item.id)
  }

  return (
    <>
    <h1>Shopping Bag</h1>
    <div className="cartContainer">
      <div id="cartDetails">
      {
      cart.map((item) => {
        return (
        <div className="cartItem" key={item.id}>
          <img src={item.images[0]} alt={item.title} width="100%" />
          <h2>{item.title}</h2>
          <p><b>{euro.format(item.price)}</b></p>
          <button onClick={()=> decreaseQty(item)}>
            {item.quantity > 1 ? "-" : <DeleteOutlineOutlinedIcon fontSize="15px" />}
          </button>
          <p>{item.quantity}</p>
          <button onClick={()=> increaseQty(item)}>+</button>
          <p>Total: <strong>{euro.format(item.quantity*item.price)}</strong></p>
          <DeleteOutlineOutlinedIcon onClick={()=> deleteById(item.id)}>Delete</DeleteOutlineOutlinedIcon>
          </div>
        )
      })
      }
      </div>
      <div id="cartCheckout">
        <span>Subtotal: {euro.format(total)}</span>
        <span>{"("+ totalItems + ") items"}</span>
        <button>Checkout</button>
        <button onClick={()=> clearCart()}>Clear bag</button>
      </div>
    </div>
    </>
  );
};

export default CartContainer;