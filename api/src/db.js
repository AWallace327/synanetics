const products = [
  {
    id: 1,
    name: "Tea",
    price: 3.5,
    icon: "mug-hot"
  },
  {
    id: 2,
    name: "Coffee",
    price: 3.5,
    icon: "mug-hot"
  },
  {
    id: 3,
    name: "Coke",
    price: 2.25,
    icon: "glass-water"
  },
  {
    id: 4,
    name: "Burger",
    price: 7.0,
    icon: "burger"
  },
  {
    id: 5,
    name: "Pizza",
    price: 8.4,
    icon: "pizza-slice"
  },
  {
    id: 6,
    name: "Cake",
    price: 4.0,
    icon: "cake-candles"
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products[id - 1];
}