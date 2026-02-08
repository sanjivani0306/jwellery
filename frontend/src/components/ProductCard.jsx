import "../styles/card.css"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}
