import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, } from 'react-router-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';

const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());


ReactDOM.render(
      <Router>
            <Provider store={store}>
                  <App />
            </Provider>
      </Router>
      , document.getElementById('root'));
