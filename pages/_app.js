import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '@/komponenten/Layout'
import '../styles/custom.scss'



export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
