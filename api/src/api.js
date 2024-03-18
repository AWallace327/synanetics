import express from 'express';
import * as db from './db.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});

app.get('/products', (req, res) => {
  res.json({
    products: db.getProducts()
  });
});

app.post('/basket/total', (req, res) => {
  if (!req.body || !Array.isArray(req.body)) {
    return res.status(400).send('Must provide array of products');
  }

  let total = 0;

  for (const product of req.body) {
    if (!product.id || !product.quantity) {
      return res.status(400).send('Products must have an ID and a quantity');
    }

    const productListing = db.getProduct(product.id);

    total += productListing.price * product.quantity;
  }

  res.json({
    total
  });
});