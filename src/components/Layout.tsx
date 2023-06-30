import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import MySider from "./Sider"
import DropItem from './dropdown'
import { Outlet } from 'react-router-dom';
const { Header, Content } = Layout;

const MyLayout: React.FC = () => { 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{width : "100%",height : '100vh'}}>
      <MySider collapsed={{collapsed}}></MySider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className="header">
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
          </div>
          <DropItem></DropItem>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;