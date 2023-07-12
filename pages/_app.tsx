import Layout from '@/components/layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// import { useReportWebVitals } from 'next/web-vitals'

export default function MyApp({ Component, pageProps }: AppProps) {
  
  // useReportWebVitals((metric) => {
  //   console.log(metric)
  // }) 

  return (
    <Layout>
      <Head>
        <title>avocados</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
