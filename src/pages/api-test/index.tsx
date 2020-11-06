import React from 'react'
import Link from 'next/link'
import Layout from '~components/Layout'

const ApiTest = () => {
  return (
    <Layout title="Api Test List | Next.js + TypeScript Example">
      <ul>
        <li>
          <Link href="/api_test/get">
            <a>GET</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default ApiTest
