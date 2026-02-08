import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)

      if (found) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  const changeQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id
            ? { ...p, qty: Math.max(1, p.qty + delta) }
            : p
        )
    )
  }

  const total = cart.reduce(
    (sum, p) => sum + p.price * p.qty,
    0
  )

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      changeQty,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
