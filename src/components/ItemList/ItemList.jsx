import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

let euro = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

const ItemList = ({ items }) => {
  return (
    <div id="itemsContainer">
      {items.map((item) => {
        console.log(item);
        return (
          <Link key={item.id} to={`/item/${item.id}`}>
            <div className="card">
              <div className="imgContainer">
                <img src={item.images[0]} alt={item.title} width="100%" />
              </div>
              <div className="descContainer">
                <p className="brand">{item.brand}</p>
                <h2>{item.title}</h2>
                <p className="price">{euro.format(item.price)}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
