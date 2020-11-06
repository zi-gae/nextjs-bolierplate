import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a style={{ marginRight: '10px' }}>Home</a>
          </Link>
          <Link href="/about">
            <a style={{ marginRight: '10px' }}>About</a>
          </Link>
          <Link href="/users">
            <a style={{ marginRight: '10px' }}>Users List</a>
          </Link>
          <Link href="/api/users">
            <a style={{ marginRight: '10px' }}>Users API</a>
          </Link>
          <Link href="/api-test/server-side">
            <a style={{ marginRight: '10px' }}>Api test on server side</a>
          </Link>
          <Link href="/api-test/client-side">
            <a>Api test on client side</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I am here to stay (Footer)</span>
      </footer>
    </div>
  </>
)

export default Layout
