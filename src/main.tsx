import '@/assets/css/index.css'
import ReactDOM from 'react-dom'

import { Provider } from "react-redux";
import App from './App'
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)