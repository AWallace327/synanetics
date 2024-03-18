import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    productAdded(state, action) {
      const product = action.payload;
      const existingItem = state.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      }
      else {
        state.push({
          ...product,
          quantity: 1
        });
      }
    },
    productReduced(state, action) {
      const id = action.payload.id;
      const existingItem = state.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity--;
      }
    },
    productDeleted(state, action) {
      const id = action.payload.id;
      const index = state.findIndex(item => item.id === id);

      if (index >= 0) {
        state.splice(index, 1);
      }
    }
  }
})

export const {
  productAdded,
  productReduced,
  productDeleted
} = basketSlice.actions;

export default basketSlice.reducer;