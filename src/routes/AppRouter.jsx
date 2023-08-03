import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemList/ItemListContainer";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import NotFound from "../components/notFound/notFound";
import CartContainer from "../components/Cart/CartContainer";
import CheckoutContainer from "../components/Checkout/CheckoutContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categories/:cat" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;