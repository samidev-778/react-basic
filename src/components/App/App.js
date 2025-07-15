import "./App.css";
import Products from "../Products/Products";
import PRODUCTS from "./PRODUCTS.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import ThemeContext from "../../contexts/ThemeContext";
import themeConfig from "../../configs/theme";
import { useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

function App() {
  const [activeTheme, setActiveTheme] = useState("green");
  return (
    <ThemeContext.Provider
      value={{ theme: themeConfig[activeTheme], setActiveTheme }}
    >
      <div className="App">
        <BrowserRouter basename="/react-basic">
          <Layout>
            <Routes>
              <Route path="/" element={<Products data={PRODUCTS} />} />
              <Route path="/About" element={<About />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
