import { useEffect, useState } from "react"
import { api } from "../services/api"
import ProductCard from "../components/ProductCard"

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ marginBottom: 20 }}>Jewelry Collection</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
