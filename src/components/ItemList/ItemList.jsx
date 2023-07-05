import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

let euro = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
});

const ItemList = ({ items }) => {
  return (
    <div id="itemsContainer">
      {items.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="imgContainer"><img src={item.images[0]} alt={item.title} width="100%"/></div>
            <h1>{item.title}</h1>
            <p className="price">{euro.format(item.price)}</p>
            <p><button>Add to Bag</button></p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
