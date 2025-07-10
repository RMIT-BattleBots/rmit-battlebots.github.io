import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '../components/page_elements/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '../components/page_elements/footer'
import RobotLogo from 'assets/robot_logo.svg';

export const metadata: Metadata = {
  title: {
    default: 'RMIT Battlebots club',
    template: 'Next.js Portfolio Starter',
  },
  description: 'This is the website for the RMIT Battlebots club',
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black light-mode dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <RobotLogo width="250"/>
          {children}
          <Footer />
          {/* <Analytics /> */}
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
