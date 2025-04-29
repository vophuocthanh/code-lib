'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

const productLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Examples', href: '#examples' },
  { name: 'Documentation', href: '#docs' },
  { name: 'Pricing', href: '#pricing' }
]

const companyLinks = [
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' }
]

const resourceLinks = [
  { name: 'Community', href: '#community' },
  { name: 'GitHub', href: 'https://github.com/yourusername/codelib' },
  { name: 'Discord', href: '#discord' },
  { name: 'Twitter', href: '#twitter' }
]

const legalLinks = [
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Cookie Policy', href: '#cookies' }
]

export function Footer() {
  return (
    <footer className='border-t border-border/50 bg-background'>
      <div className='container mx-auto py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='xs:grid-cols-2 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5'>
          <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-2'>
            <Link
              className='flex items-center space-x-2'
              href='/'
            >
              <div className='flex items-center justify-center overflow-hidden'>
                <div className='relative flex size-6 items-center justify-center rounded bg-primary font-bold text-primary-foreground'>
                  <span className='absolute text-[15px] font-bold'>C</span>
                </div>
              </div>
              <span className='font-bold'>CodeLib</span>
            </Link>
            <p className='mt-2 max-w-md text-xs text-muted-foreground sm:text-sm'>
              A modern, type-safe library for building elegant and performant applications. Open
              source and built with ❤️ by developers.
            </p>
            <div className='mt-4 flex space-x-4'>
              <Link
                aria-label='GitHub'
                className='text-muted-foreground transition-colors hover:text-foreground'
                href='https://github.com/yourusername/codelib'
              >
                <Github className='size-4 sm:size-5' />
              </Link>
              <Link
                aria-label='Twitter'
                className='text-muted-foreground transition-colors hover:text-foreground'
                href='#twitter'
              >
                <Twitter className='size-4 sm:size-5' />
              </Link>
              <Link
                aria-label='LinkedIn'
                className='text-muted-foreground transition-colors hover:text-foreground'
                href='#linkedin'
              >
                <Linkedin className='size-4 sm:size-5' />
              </Link>
              <Link
                aria-label='Email'
                className='text-muted-foreground transition-colors hover:text-foreground'
                href='mailto:info@codelib.example'
              >
                <Mail className='size-4 sm:size-5' />
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold sm:text-base'>Product</h3>
            <ul className='flex flex-col gap-2'>
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className='text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold sm:text-base'>Company</h3>
            <ul className='flex flex-col gap-2'>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className='text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold sm:text-base'>Resources</h3>
            <ul className='flex flex-col gap-2'>
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className='text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center justify-between space-y-4 border-t border-border/50 pt-6 sm:mt-10 sm:flex-row sm:space-y-0 sm:pt-8 md:mt-12'>
          <p className='text-xs text-muted-foreground sm:text-sm'>
            &copy; {new Date().getFullYear()} CodeLib. All rights reserved.
          </p>
          <ul className='flex space-x-4 sm:space-x-6'>
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className='text-xs text-muted-foreground transition-colors hover:text-foreground'
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
