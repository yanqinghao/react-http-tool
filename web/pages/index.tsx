import Link from 'next/link'
import Layout from '../components/Layout'
import RequestURL from '../components/RequestURL'
import RequstType from '../components/RequstType'
import RequestParams from '../components/RequestParams'
import { Provider } from "react-redux";
import store from "./redux/store";

const IndexPage = () => (
  <Provider store={store}>
    <Layout title="数据请求">
      <RequstType />
      <RequestURL />
      <RequestParams />
    </Layout>
  </Provider>

)

export default IndexPage
