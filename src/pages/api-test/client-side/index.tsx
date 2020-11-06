import React, { useEffect, useState } from 'react'
import Layout from '~components/Layout'
import { api } from '~services/api'

const clientSide = () => {
  const [productName, setProductName] = useState('')
  useEffect(() => {
    const getProductData = async () => {
      try {
        return await api({
          key: 'getProduct',
          data: {
            id: 1278016,
          },
        })
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    getProductData().then(({ data }) => {
      setProductName(data.descriptions.name || '')
    })
  }, [])

  return (
    <Layout title="Api Test on ClientSide">
      <p>
        Get product name is <span style={{ fontWeight: 'bold', color: 'blue' }}>{productName}</span>
      </p>
    </Layout>
  )
}

export default clientSide
