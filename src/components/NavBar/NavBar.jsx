import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const NavBar = () => {
  return (
    <div id="navbar">
      <ul>
        <li onClick={()=> {
          document.reload();
        }}>Home</li>
        <li onClick={()=> {
          document.reload();
        }}>Sale</li>
        <li onClick={()=> {
          document.reload();
        }}><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></li>
        <li><CartWidget /></li>
      </ul>
    </div>
  );
};

export default NavBar;