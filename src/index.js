import { createStore } from 'redux';

const decBtn = document.querySelector('.dec');
const incBtn = document.querySelector('.inc');
const rndBtn = document.querySelector('.rnd');
const counter = document.querySelector('.counter');

// state - текущее состояние
// action - действие, которое нужно совершить. Это обычный объект
const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    case 'RND':
      return state + action.payload;

    default:
      return state;
  }
};

// Обёртка вокруг функции-редьюсера
const store = createStore(reducer);

// Экшн-креаторы
const inc = () => ({ type: 'INC' });

const dec = () => ({type: 'DEC' });

const rnd = (payload) => ({
  type: 'RND',
  payload
});

decBtn.addEventListener('click', () => {
  store.dispatch(dec());
});

incBtn.addEventListener('click', () => {
  store.dispatch(inc());
});

rndBtn.addEventListener('click', () => {
  const payload = Math.ceil(Math.random() * 10);
  store.dispatch(rnd(payload));
});

const update = () => {
  counter.textContent = store.getState();
};

store.subscribe(update);
