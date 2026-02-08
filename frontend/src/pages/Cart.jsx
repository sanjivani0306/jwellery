import { useCart } from "../context/CartContext"

export default function Cart() {
  const { cart, changeQty, total } = useCart()

  return (
    <div style={{ padding: 30 }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>No items added yet</p>}

      {cart.map(p => (
        <div key={p.id} style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #eee",
          padding: 12
        }}>
          <div>
            <h4>{p.name}</h4>
            <p>₹ {p.price}</p>
          </div>

          <div>
            <button onClick={() => changeQty(p.id, -1)}>-</button>
            <span style={{ margin: "0 10px" }}>{p.qty}</span>
            <button onClick={() => changeQty(p.id, 1)}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  )
}
