import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

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
      item.quantity !== getQtyById(item.id) ? toast.success("Bag updated") : ""
      setCart(newArray);
    } else {
      setCart([...cart, item]);
      toast.success("Added to bag")
    }
  };
  const getQtyById = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  }

  const deleteById = (id) => {
    Swal.fire({
      title: 'Eliminar?',
      text: "Quieres quitar el producto de tu bolsa?",
      showCancelButton: true,
      confirmButtonColor: '#1976d2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        let newCart = cart.filter((item) => item.id !== id);
        setCart(newCart)
      }
  })}

  const onAdd = (item, quant) => {
    let product = { ...item, quantity: quant };
    console.log(product);
    addToCart(product);
  };

  const clearCart = () => {
    Swal.fire({
      title: 'Seguro?',
      text: "Te quedarás sin productos",
      showCancelButton: true,
      confirmButtonColor: '#1976d2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        localStorage.setItem("cart", []);
        Swal.fire({
          title: 'Cristal clear!',
          text: 'Your bag is empty',
          confirmButtonColor: '#1976d2'
        }
        )
      }
    })
  };

  const getTotalPrice = ()=> {
    let total = cart.reduce((sum, item)=> {
        return sum + item.price*item.quantity
    }, 0)
    return total
  }
  const getTotalItems = ()=> {
    let total = cart.reduce((sum, item)=> {
        return sum + item.quantity
    }, 0)
    return total
  }

  let data = { cart, addToCart, clearCart, onAdd, deleteById, total, isInCart, getTotalPrice, getTotalItems, getQtyById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
