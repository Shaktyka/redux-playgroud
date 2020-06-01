import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const decBtn = document.querySelector('.dec');
const incBtn = document.querySelector('.inc');
const rndBtn = document.querySelector('.rnd');
const counter = document.querySelector('.counter');

// Обёртка вокруг функции-редьюсера
const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } =
  bindActionCreators(actions, dispatch);

// Обработчики кликов по кнопкам
decBtn.addEventListener('click', dec);

incBtn.addEventListener('click', inc);

rndBtn.addEventListener('click', () => {
  const payload = Math.ceil(Math.random() * 10);
  rnd(payload);
});

const update = () => {
  counter.textContent = store.getState();
};

store.subscribe(update);
