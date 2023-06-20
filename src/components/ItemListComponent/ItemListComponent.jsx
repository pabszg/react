import React from "react";
import "./style.css";
const ItemListComponent = (props) => {
  return (
    <div id="hero">
      <h1>{props.greeting}</h1>
    </div>
  );
};

export default ItemListComponent;
