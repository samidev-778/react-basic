import Button from "../Button/Button";
import Image from "../Image/Image";
import "./ProductItem.css";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext, useEffect, useRef } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { PROJECT_URL } from "../../configs/general";

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  const { carts, dispatchCart } = useContext(CartContext);
  const productItemRef = useRef(null);
  const added = carts.includes(data.id);

  const handleAdd = () => {
    if (added) {
      dispatchCart({
        type: "REMOVE_FROM_CART",
        id: data.id,
      });
    } else {
      dispatchCart({
        type: "ADD_TO_CART",
        id: data.id,
      });
    }
  };

  useEffect(() => {
    productItemRef.current.classList.add("visible");
  }, []);

  return (
    <li className="productItem" ref={productItemRef}>
      <Link to={`/product/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
      <Image imgSrc={`${PROJECT_URL}/assets/img/${data.image}`} />
      <span>price: {data.price}</span>
      <Button
        HandleClick={handleAdd}
        style={{
          color: themeValues.theme.color,
          borderColor: themeValues.theme.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {added ? (
          <>
            <MdRemove />
            Remove from cart
          </>
        ) : (
          <>
            <MdAdd />
            Add to cart
          </>
        )}
      </Button>
    </li>
  );
};

export default ProductItem;
