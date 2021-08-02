import Layout from '../components/Layout'
import Image from 'next/image'
import logo_ from '../public/weknow logo.png'

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={logo_} alt="WeKnow" />
      </div>
    </Layout>

  )
}