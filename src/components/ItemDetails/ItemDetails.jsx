import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Skeleton } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const ItemDetails = () => {
  const { onAdd, isInCart } = useContext(CartContext);

  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  const { id } = useParams();
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const increaseQty = (item) => {
    quantity <= item.stock
      ? setQuantity((q) => q + 1)
      : alert("super stock máximo");
  };
  const decreaseQty = () => {
    quantity > 1 ? setQuantity((q) => q - 1) : alert("Minimo 1 artículo");
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, [id]);
  if (load) {
    return (
      <div className="itemDescription">
        {item.images && (
          <div className="productImages">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        )}
        <div className="productDetails">
          <h1>{item.title}</h1>
          <span className="precio">{euro.format(item.price)}</span>
          <h2>{item.description}</h2>
          <p>Stock: {item.stock}</p>
          <div className="counter">
          <button onClick={() => decreaseQty()}>-</button>
             {quantity}
            <button onClick={() => increaseQty(item)}>+</button>
          </div>
          <button onClick={() => onAdd(item, quantity)}>
            {isInCart(item.id) ? "Update bag": "Add to bag"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="itemDescription">
        <Skeleton variant="rectangular" width={400} height={300} />
        <Skeleton variant="rectangular" width={400} height={300} />
        <Skeleton variant="rectangular" width={400} height={300} />
      </div>
    );
  }
};

export default ItemDetails;
