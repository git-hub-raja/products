import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import BrowserRouterProviderNav from './components/navigation/BrowserRouterProviderNav';
import { APIs } from './services';
import { useDispatch } from 'react-redux';
import { actionDispatchers } from './redux/actions';

import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function LoadInitialData() {
  const dispatch = useDispatch();
  APIs()
  .readProductsFromServer()
  .then(allProducts => actionDispatchers.loadProducts(dispatch, allProducts))
  .catch(err => console.log("Error while fetching products from server!"))
  return <></>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadInitialData />
      <BrowserRouterProviderNav />      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
