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
    <div>
      <h2>Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,200px)",
        gap: 20
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
