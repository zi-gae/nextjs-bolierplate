import { NextPageContext } from 'next'
import React from 'react'
import Layout from '~components/Layout'
import { api } from '~services/api'

const serverSide = ({ name }: any) => {
  return (
    <Layout title="Api Test GET | Next.js + TypeScript Example">
      <p>
        Get product name is <span style={{ fontWeight: 'bold', color: 'red' }}>{name}</span>
      </p>
    </Layout>
  )
}

serverSide.getInitialProps = async ({ req, res }: NextPageContext) => {
  // response has { status, data }
  const response = await api(
    {
      key: 'getProduct',
      data: {
        id: 1278016,
      },
    },
    req,
    res
  )

  return {
    props: {
      name: response.data.descriptions.name || '상품명',
    },
  }
}

export default serverSide
