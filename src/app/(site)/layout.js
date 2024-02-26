import { Ibarra_Real_Nova, Public_Sans } from 'next/font/google'
import '../globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { SWRProvider } from '../swr-provider'

export const ibarra = Ibarra_Real_Nova({ subsets: ['latin'], variable: '--font-ibarra' })

export const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })

export const metadata = {
  title: 'Minimalist Portfolio Website',
  description: 'A minimalist portfolio websites.',
}

export default function RootLayout({ children }) {
  return (
    <SWRProvider>
      <html lang="en">
        <body className={`${ibarra.variable} ${publicSans.variable} flex flex-col h-screen justify-between`}>
          <div className="mx-8 md:mx-10 lg:mx-[70px] xl:mx-[165px]">
            <Nav />
            <main>{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </SWRProvider>
  )
}
