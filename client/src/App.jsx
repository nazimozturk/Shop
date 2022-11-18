import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Products/:category" element={<ProductList />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
