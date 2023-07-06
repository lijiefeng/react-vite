import { produce } from "immer";
import { AnyAction } from "redux";
import { GlobalState } from "@/redux/interface";
const globalState: GlobalState = {
	token: "",
	userInfo: {
    username : "",
    password : ""
  },
}; 
const global = (state :GlobalState = globalState,action : AnyAction) =>{
 /*  produce(state,draftState =>{
    console.log(state,draftState)
    switch (action.type){
      case "SET_TOKEN" :
        draftState.token = action.token;
        break;
      default :
        return draftState
    }
  }) */
  const newState = {...state}
  switch (action.type){
    case "SET_TOKEN" :
      newState.token = action.token
      return newState
    case "SET_USER" :
        newState.userInfo = action.userInfo
        return newState
    default:
      return state
  }
} 
export default global