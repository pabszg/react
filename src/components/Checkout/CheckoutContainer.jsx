import CheckoutFormik from "../formik/checkoutFormik";
import { useContext, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Checkout from "./Checkout";
import CheckoutSuccess from "./CheckoutSuccess";
import { CartContext } from "../../context/CartContext";
import "./style.css";

const CheckoutContainer = () => {
  const [success, setSuccess] = useState(false);
  const [order, setOrder] = useState({});
  const { setCart } = useContext(CartContext);
  const createOrder = (order) => {
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      console.log(res);
      setOrder({ id: res.id, ...order });
      setCart([]);
      setSuccess(true);
    });
    order.items.forEach((element) => {
      let refDoc = doc(db, "items", element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };
  return success ? (
    <CheckoutSuccess order={order} />
  ) : (
    <div id="checkoutContainer">
      <CheckoutFormik
        createOrder={createOrder}
        success={success}
        setSuccess={setSuccess}
      />
      <Checkout />
    </div>
  );
};

export default CheckoutContainer;
