import axios from 'axios';

const getProducts = async () => {
  const { data } = await axios.get(
    `http://localhost:8000/products`,
  );
  return data.products;
}

export { getProducts };