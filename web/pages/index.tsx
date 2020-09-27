import Layout from "../components/Layout";
import RequestConfig from "../components/RequestConfig";
import { Provider } from "react-redux";
import store from "./redux/store";

const IndexPage = () => (
  <Provider store={store}>
    {/* <Layout title="数据请求"> */}
      <RequestConfig />
    {/* </Layout> */}
  </Provider>
);

export default IndexPage;
