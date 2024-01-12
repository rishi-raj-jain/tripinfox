import '@/styles/globals.css'
import WA from 'components/Analytics/WA'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={[inter.className, 'flex flex-col w-full items-center'].join(' ')}>
      <Component {...pageProps} />
      <WA ID="3D04G3B9ACAE3F4354" />
    </div>
  )
}
