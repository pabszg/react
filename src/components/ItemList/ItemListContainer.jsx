import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./style.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {cat} = useParams();
  console.log(cat)
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json.products))
      .catch((error) => console.log(error))
      .finally(console.log("Cargado"))
  }, []);
  useEffect(()=> {
      cat === undefined ? setFilteredItems(items) : setFilteredItems(items.filter((item) => item.category === cat));
  }, [cat, items])
  
  return <ItemList items={filteredItems} category={cat} />;
};
export default ItemListContainer;
