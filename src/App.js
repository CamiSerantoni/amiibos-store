import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CartContent from "./components/CartContent/CartContent";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrito" element={<CartContent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
