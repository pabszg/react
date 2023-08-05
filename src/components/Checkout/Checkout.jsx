import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <>
      <div id="cartCheckout">
        {cart.map((item) => {
          return (
            <div key={item.id} className="checkoutItem">
              <img src={item.images[0]} alt="" />
              <b>{item.quantity}</b>
              <span>{item.brand}</span>
              <span>{item.title}</span>
              <b>{euro.format(item.price * item.quantity)}</b>
            </div>
          );
        })}
        <span><b>Total: {euro.format(getTotalPrice())}</b></span>
      </div>
    </>
  );
};

export default Checkout;
