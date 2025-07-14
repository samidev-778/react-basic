import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ children, HandleClick = () => {}, ...props }) => (
  <button onClick={HandleClick} className="button" {...props}>
    {children}
  </button>
);

Button.propTypes = {
  HandleClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Button;
