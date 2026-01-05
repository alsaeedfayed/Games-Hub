import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  wishlist: (string | number)[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<string | number>) {
      if (!state.wishlist.includes(action.payload)) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string | number>) {
      state.wishlist = state.wishlist.filter((id) => id !== action.payload);
    },
    setWishlist(state, action: PayloadAction<(string | number)[]>) {
      state.wishlist = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
