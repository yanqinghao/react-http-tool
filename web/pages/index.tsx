import Link from 'next/link'
import Layout from '../components/Layout'
import RequestURL from '../components/RequestURL'
import RequstType from '../components/RequstType'
import RequestParams from '../components/RequestParams'

const IndexPage = () => (
  <Layout title="数据请求">
    <RequstType />
    <RequestURL />
    <RequestParams />
  </Layout>
)

export default IndexPage
