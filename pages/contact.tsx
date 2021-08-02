import React from 'react'
import Layout from '../components/Layout'
import Container from '../styles/Containers'
interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
        <Container>
      <h1>Contact Us</h1>
      <p>
        system@weknow.network
      </p>
      </Container>
    </Layout>
  )
}

export default contact