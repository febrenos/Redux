import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart", // ex: cart/addProduct
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyinCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      // aumentar quantidade em 1 se estiver
      if (productIsAlreadyinCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
        return
      } else {
        state.products = [...state.products, { ...action.payload, quantity: 1 }]
      }
    },

    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },

    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
  },
})

export const {
  addProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
} = cartSlice.actions

export default cartSlice.reducer
