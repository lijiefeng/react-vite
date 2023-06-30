import { Button, Form, Input,Select } from 'antd';
const layout = {
  layout : "inline",
};

const tailLayout = {
  labelCol: { span: 18 },
  wrapperCol: { span: 14 },
};
const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onGenderChange = (value: string) => {
    console.log(value)
    switch (value) {
      
      default:
    }
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item name="gender">
        <Select
          placeholder="请选择"
          onChange={onGenderChange}
          style={{ width: 120 }}
        >
          <Option value="1">全部</Option>
          <Option value="2">严重</Option>
          <Option value="3">一般</Option>
        </Select>
      </Form.Item>
      <Form.Item name="note" >
        <Input placeholder="Basic usage" />
      </Form.Item>
     
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
      </Form.Item>
      
    </Form>
  );
};

export default App;