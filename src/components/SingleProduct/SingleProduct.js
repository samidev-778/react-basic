import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import PRODUCTS from "../App/PRODUCTS.json";
import Image from "../Image/Image";
import { useContext } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "../Button/Button";
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === id);

  const themeValues = useContext(ThemeContext);
  const { carts, dispatchCart } = useContext(CartContext);
  const added = carts.includes(product.id);

  const handleAdd = () => {
    if (added) {
      dispatchCart({
        type: "REMOVE_FROM_CART",
        id: product.id,
      });
    } else {
      dispatchCart({
        type: "ADD_TO_CART",
        id: product.id,
      });
    }
  };
  return (
    <div className="singleProduct">
      <h2>{product.name}</h2>
      <Image imgSrc={product.image} />
      <span>price: {product.price}</span>
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
    </div>
  );
};

export default SingleProduct;
