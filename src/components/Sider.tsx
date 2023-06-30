import React, { useState } from 'react';
import {
  SettingOutlined,
  InfoCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {useNavigate} from "react-router-dom"
const { Sider } = Layout;

const MySider: React.FC = ({collapsed}) => {
  const navgate = useNavigate()
  return (
    <Sider trigger={null} collapsible collapsed={collapsed.collapsed}>
      <div className="layoutName">基础平台系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick = {({key})=>{
            console.log(key)
            navgate(key)
          }}
          items={[
            {
              key: '1',
              icon: <InfoCircleOutlined />,
              label: '告警',
              children : [
                {
                  label : "告警事件",
                  key :"/alert/management",
                },
                {
                  label : "告警历史",
                  key :"/alert/history",
                }
              ]
            },
            {
              key: '2',
              icon: <DatabaseOutlined />,
              label: '事件',
              children : [
                {
                  label : "系统事件",
                  key :"/cluster/event",
                },
                {
                  label : "操作日志",
                  key :"/cluster/operationLog",
                }
              ]
            },
            {
              key: '3',
              icon: <SettingOutlined />,
              label: '系统配置',
            },
          ]}
        />
    </Sider>
  );
};

export default MySider;