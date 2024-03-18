import Products from 'ui/products/Products';
import Basket from 'ui/basket/Basket';

export default function Layout() {
  return (
    <div className="wrapper">
      <div className="products-container">
        <Products />
      </div>
      <div className="basket-container">
        <Basket />
      </div>
    </div>
  );
};