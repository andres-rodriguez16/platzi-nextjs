import React from 'react'
import { GetStaticProps } from 'next'
//getStaticProps

export const getStaticPaths = async () => {
  const r = await fetch('https://platzi-nextjs-lime.vercel.app/api/avo')
  if (!r.ok) {
    throw new Error('Failed to load products.')
  }
  const { data: productList }: TAPIAvoResponse = await r.json()
  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))
  return {
    paths,
    fallback: false, // In case of error we show the "fallback" page with a loading
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const r = await fetch(`https://platzi-nextjs-lime.vercel.app/api/avo/${id}`)
  if (!r.ok) {
    throw new Error('Failed to load products.')
  }
  const product: TAPIAVODetailResponse = await r.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <section>
      <h1>Página producto: {product?.name} </h1>
    </section>
  )
}

export default ProductPage
