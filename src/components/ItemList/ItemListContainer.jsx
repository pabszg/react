import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./style.css";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { cat } = useParams();
  console.log(cat);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json.products))
      .then(setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    cat === undefined
      ? setFilteredItems(items)
      : setFilteredItems(items.filter((item) => item.category === cat));
  }, [cat, items]);
  if (loading) {
    return (
      <div>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </div>
    );
  } else {
    return <ItemList items={filteredItems} category={cat} />;
  }
};
export default ItemListContainer;
