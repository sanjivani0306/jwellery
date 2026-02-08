import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

export default function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav style={{
        padding: 16,
        borderBottom: "1px solid #eee",
        display: "flex",
        gap: 20,
        fontWeight: "bold"
      }}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  )
}
