

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";
import {Login} from "@/api/interface"
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { setToken } from '@/redux/modules/global/action';
import { store } from '@/redux';
import { connect } from "react-redux";
const LoginForm = () =>{
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  // 登录
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
      
      store.dispatch(setToken("111"))
			//navigate("/alert/management")
		} finally {
			setLoading(false);
		}
	};
  const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
  console.log(store.getState().global)
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
export default connect(null,null)(LoginForm)  