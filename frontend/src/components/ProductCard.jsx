import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{
      border: "1px solid #eee",
      padding: 16,
      borderRadius: 10,
      background: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: 170,
          objectFit: "cover",
          borderRadius: 8
        }}
      />

      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          border: "none",
          background: "black",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}
