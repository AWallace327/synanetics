import axios from 'axios';

const postTotal = async (basket) => {
  const { data } = await axios.post(
    `http://localhost:8000/basket/total`,
    basket.map(item => ({id: item.id, quantity: item.quantity}))
  );
  return data.total;
}

export { postTotal };