import { createStore } from 'redux';

const decBtn = document.querySelector('.dec');
const incBtn = document.querySelector('.inc');
const counter = document.querySelector('.counter');

// state - текущее состояние
// action - действие, которое нужно совершить. Это обычный объект
const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

// Обёртка вокруг функции-редьюсера
const store = createStore(reducer);

decBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});

incBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

const update = () => {
  counter.textContent = store.getState();
};

store.subscribe(update);
