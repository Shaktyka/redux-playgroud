import { createStore } from 'redux';

// state - текущее состояние
// action - действие, которое нужно совершить. Это обычный объект
const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    default:
      return state;
  }
};

// Обёртка вокруг функции-редьюсера
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
