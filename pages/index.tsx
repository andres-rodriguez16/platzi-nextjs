import React from 'react'
import Link from 'next/link'

//getStaticProps
export const getStaticProps = async () => {
  const r = await fetch('https://platzi-nextjs-lime.vercel.app/api/avo')
  if (!r.ok) {
    throw new Error('Failed to load products.')
  }
  const { data: productList }: TAPIAvoResponse = await r.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div className="product" key={product.name}>
          <Link href={`product/${product.id}`} >
            <p> {product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage
