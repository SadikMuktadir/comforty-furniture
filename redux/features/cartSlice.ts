import { IFurniture } from '@/app/(comomlayout)/product/page';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartProduct extends IFurniture {
  orderQuantity: number;
}
interface InitialState {
  products: CartProduct[];
}
const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const addProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (addProduct) {
        addProduct.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
  },
});

export const orderedProducts = (state: RootState) => {
  return state.cart.products;
};

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
