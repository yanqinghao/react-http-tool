import Link from 'next/link'
import Layout from '../components/Layout'
import RequestURL from '../components/RequestURL'
import RequstType from '../components/RequstType'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <RequestURL />
    <RequstType />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
