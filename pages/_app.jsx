import '../styles/globals.css'
import Navbar from '../common/components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
  <Navbar>
    <Component {...pageProps} />
  </Navbar>)
}

export default MyApp
