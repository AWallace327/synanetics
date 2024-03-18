import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import store from 'store/store'
import { productAdded } from 'store/basketSlice';

export default function Product({product}) {
  const handleClick = () => {
    store.dispatch(productAdded(product));
  };

  return (
    <div className="product">
      <div>
        <FontAwesomeIcon icon={product.icon} size="8x" className="icon"/>
      </div>
      <div>
        <h3>{product.name}</h3>
      </div>
      <div>
        £{product.price.toFixed(2)}
      </div>
      <Button variant="contained" onClick={handleClick}>Add to Basket</Button>
    </div>
  );
};