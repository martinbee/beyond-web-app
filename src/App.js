import React from 'react';
import 'react-select/dist/react-select.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Home from './components/Home';
import './App.css';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
const reduxDevToolHook = __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevToolHook);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Home />
    </div>
  </Provider>
);

export default App;
