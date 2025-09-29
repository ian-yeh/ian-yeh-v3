import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: "--font-jetbrains"
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${jetbrains.variable}`}>
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
