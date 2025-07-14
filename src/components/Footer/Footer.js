import "./Footer.css";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const themeValues = useContext(ThemeContext);
  return (
    <div className="footer">
      <h5>Developed By Sajjad</h5>
      <div>
        <button
          onClick={() => themeValues.setActiveTheme("green")}
          className="green"
        >
          Green
        </button>
        <button
          onClick={() => themeValues.setActiveTheme("blue")}
          className="blue"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default Footer;
