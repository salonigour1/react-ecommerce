import "./App.css";
// import { FaGithub } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./components/Checkout";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
