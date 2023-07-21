import { Dispatch } from "react";

// ? 下面方法仅为测试使用，不参与任何功能开发
interface MenuProps {
	type: string;
	//menuList: Menu.MenuOptions[];
}

export const getMenuListActionThunk = () => {
	return (dispatch:any) =>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve("哈哈")
      },3000)
     
    }).then(res =>{
      return dispatch({
        type: 'SET_LIST',
        list : ["this is a pig2"]
      })
    }).then(res =>{
      console.log(res,"res============")
      return "哈哈哈"
    })
  }
};