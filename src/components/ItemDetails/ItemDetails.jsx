import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Skeleton, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetails = () => {
  const { onAdd, isInCart, getQtyById } = useContext(CartContext);

  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = (item) => {
    quantity < item.stock
      ? setQuantity((q) => q + 1)
      : toast.warning("Supera stock máximo");
  };
  const decreaseQty = () => {
    quantity > 1
      ? setQuantity((q) => q - 1)
      : toast.warning("Mínimo 1 artículo");
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(()=> {
    loading ? setQuantity : (isInCart(item.id) ? setQuantity(getQtyById(item.id)) : setQuantity(1))
  }, [loading])

  return (
    <div className="itemDescription">
      {loading ? (
        <div className="productImages">
        <Skeleton variant="rectangular" width={500} height={300} />
        <Skeleton variant="rectangular" width={150} height={100} />
        <Skeleton variant="rectangular" width={150} height={100} />
        <Skeleton variant="rectangular" width={150} height={100} />
        </div>

      ) : (
        item.images && (
          <div className="productImages">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        )
      )}
      <div className="productDetails">
        <Typography variant="p" className="brand">
          {loading ? <Skeleton /> : item.brand}
        </Typography>
        <Typography variant="h2">
          {loading ? <Skeleton /> : item.title}
        </Typography>
        <Typography variant="span" className="precio">
          {loading ? <Skeleton /> : euro.format(item.price)}
        </Typography>
        <Typography variant="p">
          {loading ? <Skeleton /> : item.description}
        </Typography>
        <div className="counter">
          <button className="decrease" onClick={() => decreaseQty()}>
            -
          </button>
          <p className="quantity">{loading ? <Skeleton /> : quantity}</p>
          <button className="increase" onClick={() => increaseQty(item)}>
            +
          </button>
        </div>
        <button id="cartUpdate" onClick={() => onAdd(item, quantity)}>
          {isInCart(item.id) ? "Update Bag" : "Add to bag"}
        </button>
        <Typography variant="p">
          {loading ? (
            <Skeleton />
          ) : isInCart(item.id) ? (
            "Tienes " + getQtyById(item.id) + " artículos en la bolsa"
          ) : item.stock > 0 ? (
            "In Stock"
          ) : (
            "Out of stock"
          )}
        </Typography>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default ItemDetails;
