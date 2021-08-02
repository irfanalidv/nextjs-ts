
import React from 'react'
import AppLink from './AppLink'
import { Container } from '../styles/Containers'
import HeaderElement from '../styles/HeaderElement'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Container>
        <h1>
          <AppLink href="/" label="WeKnow" />
    </h1>
        <nav>
          <AppLink href="/about" label="About" />
          <AppLink href="/contact" label="Contact" />
        </nav>
      </Container>
    </HeaderElement>
  )
}

export default Header