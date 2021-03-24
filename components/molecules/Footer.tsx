import * as React from 'react'
import styled from '@emotion/styled'
import { Copyright, Logo, MenuContents } from './Menu'
import Shares from './shares'
import { createFacebookIntent, createTwitterIntent } from 'assets/utils/share'

export const Footer = () => {
  return (
    <Container>
      <MenuContents />
      <ShareContainer>
        <Shares
          onClickTwitter={() => {
            const intent = createTwitterIntent({
              url: location.href,
              text: '',
              hashtags: ''
            })
            window.open(intent)
          }}
          onClickFacebook={() => {
            const intent = createFacebookIntent(location.href)
            window.open(intent)
          }}
        />
      </ShareContainer>
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

const ShareContainer = styled.div`
  width: 510px;
  margin: 0 auto 160px;
`
