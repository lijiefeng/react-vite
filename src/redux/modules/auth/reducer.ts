import { produce } from "immer";
import { AnyAction } from "redux";
import { AutoState } from "@/redux/interface";
const autoState: AutoState = { 
	list : []
}; 
const auth = (state :AutoState = autoState,action : AnyAction) =>{
  const newState = {...state}
  switch (action.type){
    case "SET_LIST" :
      newState.list = action.list
      return newState
   
    default:
      return state
  }
} 
export default auth