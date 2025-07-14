import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const Header = () => {
  let { pathname } = useLocation();
  let title = "";
  const { carts } = useContext(CartContext);

  if (pathname === "/") title = "Shop";
  if (pathname === "/About") title = "About";
  if (pathname === "/Blog") title = "Blog";
  if (pathname === "/Contact") title = "Contact";
  if (pathname.includes("product")) title = "Shop";

  return (
    <div className="header">
      <div className="topBar">
        <NavBar />
        <div className="cart">
          <h4>{carts.length}</h4>
          <MdShoppingCart />
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};
export default Header;
