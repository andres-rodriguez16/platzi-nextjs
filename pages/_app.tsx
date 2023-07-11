import Layout from '@/components/layout/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>avocados</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
