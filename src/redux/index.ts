
import {combineReducers,applyMiddleware,Store,createStore} from "redux"
import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise" 
import global from "./modules/global/reducer"


//模块化 reducer
const reducer = combineReducers({
  global 
})


//redux持久化
const persistConfig = {  
  key : "redux-state",
  storage : storage,
  //  blacklist : [], //黑名单
  whitelist: ["global"],//白名单 
}
const persistedReducer = persistReducer(persistConfig,reducer)

//创建中间件
const middleWares = applyMiddleware(reduxThunk,reduxPromise)

//创建 stroe
const store:Store = createStore(persistedReducer,middleWares)

// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor };