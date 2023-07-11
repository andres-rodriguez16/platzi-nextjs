import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch(`/api/avo/`)
      .then((r) => r.json())
      .then(({ data, length }) => {
        setProducts(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {products.map((product) => (
        <div className="product">
          <p> {product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage
