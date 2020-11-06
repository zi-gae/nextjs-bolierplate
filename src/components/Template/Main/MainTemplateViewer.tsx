import React, { ReactNode } from 'react'
import { Flex } from 'rebass'
import Nav from '~components/Nav'

type MainTemplateProps = {
  children: ReactNode
}

const MainTemplateViewer = ({ children }: MainTemplateProps) => {
  return (
    <Flex>
      <Nav />
      {children}
    </Flex>
  )
}

export default MainTemplateViewer
