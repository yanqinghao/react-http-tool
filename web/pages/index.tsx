import Layout from "../components/Layout";
import RequestItem from "../components/RequestItem";
import { Provider } from "react-redux";
import store from "./redux/store";

const IndexPage = () => (
  <Provider store={store}>
    <Layout title="数据请求">
      <RequestItem />
    </Layout>
  </Provider>
);

export default IndexPage;
