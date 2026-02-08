import { useState } from "react"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext"

export default function App() {
  const [page, setPage] = useState("products")

  return (
    <CartProvider>

      <button onClick={() => setPage("products")}>
        Products
      </button>

      <button onClick={() => setPage("cart")}>
        Cart
      </button>

      {page === "products"
        ? <Products />
        : <Cart />
      }

    </CartProvider>
  )
}
