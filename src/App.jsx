import "./App.css";
import ItemListComponent from "./components/ItemListComponent/ItemListComponent";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  console.log("import App");
  return (
    <div>
      <NavBar />
      <ItemListComponent greeting="SALE" />
    </div>
  );
};

export default App;
