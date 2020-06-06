import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import App from './components/app';

// Обёртка вокруг функции-редьюсера
const store = createStore(reducer);

// Теперь доступ к store будут иметь любые комп-ты
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
