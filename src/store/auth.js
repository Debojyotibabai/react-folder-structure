import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "users";
const FETCH_USER_BY_ID_ASYNC = `${SLICE_NAME}/FETCH_USER_BY_ID_ASYNC`;

// Async Thunks
// const fetchUserById = createAsyncThunk(FETCH_USER_BY_ID_ASYNC, () => {});

// Initial State
const initialState = {};

// Configure Slice
const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    signup: (state, action) => {
      return { ...state, ...action.payload };
    },
    signin: (state, action) => {
      return {};
    },
    signout: (state, action) => {
      return {};
    },
  },
  extraReducers: {
    // [fetchUserById.fulfilled]: (state, { meta, payload }) => {},
    // [fetchUserById.pending]: (state, { meta }) => {},
    // [fetchUserById.rejected]: (state, { meta, payload, error }) => {},
  },
});

export const { signin, signup, signout } = actions;
export default reducer;
