import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import { ReactNode } from 'react'
import ProviderQuery from '@/core/utils/provider-query'
import { ThemeProvider } from '@/components/theme-provider'
import 'react-toastify/dist/ReactToastify.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'CodeLib - Modern Code Library',
  description: 'A beautiful and modern code library with powerful features'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme='system' storageKey='codelib-theme'>
          <ToastContainer className='text-xl' />
          <ProviderQuery>{children}</ProviderQuery>
        </ThemeProvider>
      </body>
    </html>
  )
}
