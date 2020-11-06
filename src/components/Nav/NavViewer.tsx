import React from 'react'
import { Heading, Flex } from 'rebass'
import styled from '@emotion/styled'

const NavBox = styled(Flex)`
  width: 18%;
  min-width: 300px;
`

const NavViewer = () => {
  return (
    <NavBox p={2} bg="gray.2">
      <Heading fontSize={5}>
        dosan <br />
        seoulstore <br />
        admin
      </Heading>
    </NavBox>
  )
}

export default NavViewer
