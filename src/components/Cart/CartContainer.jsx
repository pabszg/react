import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CartContainer = () => {
  const { cart, clearCart, deleteById, onAdd, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  let total = getTotalPrice();
  let totalItems = getTotalItems();

  const increaseQty = (item) => {
    item.quantity < item.stock
      ? onAdd(item, item.quantity + 1)
      : toast.warning("Supera el stock máximo");
  };
  const decreaseQty = (item) => {
    item.quantity > 1 ? onAdd(item, item.quantity - 1) : deleteById(item.id)
  };

  return (
    <>
      <h1>Shopping Bag</h1>
      <div className="cartContainer">
        <div id="cartDetails">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <Link to={`/item/${item.id}`}><img src={item.images[0]} alt={item.title} /></Link>
                <h2 className="title">{item.title}</h2>
                <div className="counter">
          <button className="decrease" onClick={() => decreaseQty(item)}>
            -
          </button>
          <p className="quantity">{item.quantity}</p>
          <button className="increase" onClick={() => increaseQty(item)}>
            +
          </button>
        </div>


                <p>
                  Total:{" "}
                  <strong>{euro.format(item.quantity * item.price)}</strong>
                </p>
                <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover={false}
                  theme="light"
                />
                <DeleteOutlineOutlinedIcon onClick={() => deleteById(item.id)}>
                  Delete
                </DeleteOutlineOutlinedIcon>
              </div>
            );
          })}
        </div>
        <div id="cartCheckout">
          <span>Subtotal: {euro.format(total)}</span>
          <span>{"(" + totalItems + ") items"}</span>
          <button>Checkout</button>
          <button onClick={() => clearCart()}>Clear bag</button>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
