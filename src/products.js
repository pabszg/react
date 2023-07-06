const fetchProducts = () => {
  let products = [];
  return (fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => (products = json.products))
    .catch((error) => console.log(error));
});

fetchProducts();