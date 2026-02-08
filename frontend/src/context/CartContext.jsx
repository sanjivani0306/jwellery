import { createContext, useContext, useState } from "react"
import { api } from "../services/api"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  async function addToCart(product) {
    await api.post("/cart", {
      productId: product.id,
      qty: 1
    })

    setCart(prev => [...prev, { ...product, qty: 1 }])
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) return
    setCart(prev =>
      prev.map(p => p.id === id ? { ...p, qty } : p)
    )
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      updateQty
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
