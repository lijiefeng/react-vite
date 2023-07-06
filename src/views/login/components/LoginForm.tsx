

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";
import {Login} from "@/api/interface"
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { setToken,setUser } from '@/redux/modules/global/action';
import { store } from '@/redux';
import { connect } from "react-redux";
const LoginForm = (props: any) =>{
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setToken ,setUser} = props;
  // 登录
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true); 
      setUser(loginForm)
    //  console.log(store.getState())
			navigate("/alert/management")
		} finally {
			setLoading(false);
		}
	};
  const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
  return(
    <Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
      <div>
       
      </div>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
  )
}
const mapDispatchToProps = { setToken ,setUser};
export default connect(null,mapDispatchToProps)(LoginForm)   