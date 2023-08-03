import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutFormik from "../formik/checkoutFormik";

const CheckoutContainer = () => {
  const {cart, getTotalPrice, getTotalItems} = useContext(CartContext)
  return (
    <>
    <CheckoutFormik />
      <div id="cartCheckout">
        {cart.map((item)=> {
          return (
            <div key={item.id}>
              <img src={item.images[0]} alt="" width={50}/>
              {item.brand}
              {item.title}
              {item.price*item.quantity}
              {getTotalPrice()}
            </div>
          )
        })}
          <button>Comprar</button>
      </div>
    </>
  );
};

export default CheckoutContainer;
