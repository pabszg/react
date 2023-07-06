import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import NotFound from "./components/notFound/notFound";

const App = () => {
  return (    
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:cat" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
