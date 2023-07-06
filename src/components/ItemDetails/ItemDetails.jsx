import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Skeleton } from "@mui/material";

const ItemDetails = () => {
  let euro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  const { id } = useParams();
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
      setItem(json);
      setLoad(true);
      })
      .catch((error) => console.log(error))
  }, [id]);
  console.log(item);
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
          <button>Add to Bag</button>
        </div>
      </div>
    );
  } else {
    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
  }
};

export default ItemDetails;
