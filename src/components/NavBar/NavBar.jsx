import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const NavBar = () => {
  return (
    <div id="navbar">
      <ul>
        <li>Home</li>
        <li>Cat 1</li>
        <li><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></li>
        <li><CartWidget /></li>
      </ul>
    </div>
  );
};

export default NavBar;