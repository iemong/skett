import * as React from 'react'
import styled from '@emotion/styled'
import { Copyright, Logo, MenuContents } from './Menu'

export const Footer = () => {
  return (
    <Container>
      <MenuContents />
      <Logo src="/img/logo_gray.png" alt="ロゴ" />
      <Copyright>
          &copy; FUKKO DESIGN All Rights Reserved.
      </Copyright>
    </Container>
  )
}

const Container = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 80px 0 160px;
`
