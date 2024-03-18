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