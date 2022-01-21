import '../styles/globals.css'
import '../styles/tailwind.css'

export default function Render({ Component, pageProps }) {
  return <Component {...pageProps} />
}