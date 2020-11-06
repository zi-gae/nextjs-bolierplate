import React from 'react'
import { NextPageContext } from 'next'

const Error = ({ statusCode }: any) => {
  return <h1>{statusCode}</h1>
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const rslt = res ? res.statusCode : err
  const statusCode = rslt ? err?.statusCode : 404
  return { statusCode }
}

export default Error
