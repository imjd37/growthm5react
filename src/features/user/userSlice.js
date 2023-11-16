import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Store users data into database
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:2000/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      if (result.command === "INSERT") {
        alert("Registration successful");
      } else {
        alert(result);
      }
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// get users data from database
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:2000/show");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// delete users data

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (email, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:2000/delete", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(email),
    });
    try {
      const result = await response.json();
      if (result === 1) {
        alert("Your Account delete successfully");
      } else {
        alert("Something went wrong!!!!!!!");
      }
      return email;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// --------Currencies---------

export const showCurrencies = createAsyncThunk(
  "showCurrencies",
  async (args, { rejectedWithValue }) => {
    const response = await fetch("https://api.coinbase.com/v2/currencies");
    try {
      const result = await response.json();
      return result.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);


const initialState = {
  users: [],
  currencies:[],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.email !== action.payload);
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { email } = action.payload;
      if (email) {
        state.users = state.users.filter((ele) => ele.email !== email);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showCurrencies.pending]: (state) => {
      state.loading = true;
    },
    [showCurrencies.fulfilled]: (state, action) => {
      state.loading = false;
      state.currencies = action.payload;
    },
    [showCurrencies.rejected]: (state, action) => {
      state.loading = false;
      state.currencies = action.payload;
    },
  },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
