import ProductItem from "../ProductItem/ProductItem";
import Slideshow from "../Slideshow/Slideshow";

const Products = ({ data }) => (
  <div>
    <Slideshow />
    <ul className="products">
      {data.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </ul>
  </div>
);

// const Products = (**props**) => {           روش دوم
//   return (
//     <ul className="products">
//       {**props.data**.map((item) => (
//         <li>
//           <h3>{item.name}</h3>
//           <img src={item.image} />
//           <span>price: {item.price}</span>
//           <button>add to cart</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Products = (props) => {               روش سوم
//   **const { data } = props;**
//   return (
//     <ul className="products">
//       {data.map((item) => (
//         <li>
//           <h3>{item.name}</h3>
//           <img src={item.image} />
//           <span>price: {item.price}</span>
//           <button>add to cart</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Products;
