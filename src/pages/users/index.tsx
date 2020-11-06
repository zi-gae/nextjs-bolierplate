import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { User } from '~interfaces/index'

const WithStaticProps = () => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside
      <code>getStaticProps()</code>
    </p>
    <p>You are currently on: /users</p>
    {/* <List items={items} /> */}
    <p>
      <Link href="/">
        <a href="#/">Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Caroline' },
    { id: 104, name: 'Dave' },
  ]
  return { props: { items } }
}

export default WithStaticProps
