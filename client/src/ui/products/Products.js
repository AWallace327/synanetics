import { useQuery } from 'react-query';

import Grid from '@mui/material/Grid';

import Product from 'ui/products/Product';
import { getProducts } from 'api/products';

export default function Products() {
  const { isPending, data: products } = useQuery('products', getProducts);

  return (
    <div>
      {!isPending && products && (
        <Grid container columnSpacing={6} rowSpacing={4}>
          {products.map((product, index) => (
            <Grid item key={index}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};