import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./style.css";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../firebaseConfig.js"
import { collection, getDocs } from "firebase/firestore" 

const ItemListContainer = () => {
  const { cat } = useParams();
  console.log(cat);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

/*   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json.products))
      .then(()=> setLoading(false))
      .catch((error) => console.log(error));
  }, []); */

  useEffect(() => {
    let itemsCollection = collection(db, "items")
    getDocs(itemsCollection).then((res)=> {
      let productos = res.docs.map((doc)=> {
        return {id: doc.id, ...doc.data()}
      })
      setItems(productos);
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    cat === undefined
      ? setFilteredItems(items)
      : setFilteredItems(items.filter((item) => item.category === cat));
  }, [cat, items]);
  return (loading ? (<div id="itemsContainer">
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
    <Skeleton variant="rectangular" width={295} height={340} />
  </div>) : <ItemList items={filteredItems} />)
};
export default ItemListContainer;
