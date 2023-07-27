import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [total, setTotal] = useState(0)

  const isInCart = (id) => {
    let exist = cart.some((item) => item.id === id);
    return exist;
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      let newArray = cart.map((e) => {
        if (e.id === item.id) {
          return { ...e, quantity: item.quantity };
        } else {
          return e;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const deleteById = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const onAdd = (item, quant) => {
    let product = { ...item, quantity: quant };
    console.log(product);
    addToCart(product);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", []);
  };

  const getTotalPrice = ()=> {
    let total = cart.reduce((sum, item)=> {
        return sum + item.price*item.quantity
    }, 0)
    return total
  }

  let data = { cart, addToCart, clearCart, onAdd, deleteById, total, isInCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
