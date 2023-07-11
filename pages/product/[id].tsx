import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((r) => r.json())
      .then((r) => setProduct(r))
  }, [])
  return (
    <section>
      <h1>Página producto: {product?.name} </h1>
    </section>
  )
}

export default ProductPage
