import { useCart } from "../context/CartContext"

export default function Cart() {
  const { cart, removeItem, updateQty } = useCart()

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name}

          <input
            type="number"
            value={item.qty}
            onChange={e =>
              updateQty(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
