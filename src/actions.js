// Экшн-креаторы
export const inc = () => ({ type: 'INC' });

export const dec = () => ({type: 'DEC' });

export const rnd = () => {
  const randomValue = Math.ceil(Math.random() * 10);
  return {
    type: 'RND',
    payload: randomValue
  };
};
