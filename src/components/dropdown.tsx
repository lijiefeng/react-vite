import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

import { useNavigate } from 'react-router-dom';
const items: MenuProps['items'] = [
  {
    key: 1,
    label: "修改名称",
  },
  {
    key: 2,
    label: "修改密码",
  },
  {
    key: 3,
    label: "退出登录",
  }
];
const DropItem: React.FC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch(Number(key)){
      case 1 :
        break;
      case 2 :
        break;
      case 3 :
        navigate("/login")
        break;
      default:
        break;
    }
    console.log(key)
  };
  return (
      <Dropdown menu={{ items,onClick }} placement="bottomLeft"  arrow>
      <Button>测试</Button>
    </Dropdown>
  )
};

export default DropItem;