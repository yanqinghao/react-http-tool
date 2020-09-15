import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Input,
} from "antd";

import MainLayout from "../layouts/main";

const FormItem = Form.Item;
const Option = Select.Option;

export default function Home() {
  return (
    <MainLayout>
      <Form layout="horizontal">
        <FormItem
          label="请求方式"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select size="large" defaultValue="get" style={{ width: 192 }}>
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
          </Select>
        </FormItem>
        <FormItem
          label="请求链接"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input
            size="large"
            style={{ width: 800 }}
            name="inputNumber"
            placeholder="请输入你的请求链接"
          />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            测试请求
          </Button>
        </FormItem>
      </Form>
    </MainLayout>
  );
}
