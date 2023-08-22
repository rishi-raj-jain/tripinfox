import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={[inter.className, 'flex flex-col w-full items-center'].join(' ')}>
      <Component {...pageProps} />
    </div>
  )
}
