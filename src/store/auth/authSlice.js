import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const login = async (username, password) => {
    return new Promise(function() {
        if (username === 'salwa' && password === 'salwa123') {
            alert("Berhasil Login");
        }
        else {
            alert('Username atau password salah')
        }
    })
}

export const userLogin = createAsyncThunk("auth/userLogin", async ({username, password})=> {
    try {
        const response = await login(username, password);
        return response;
    } catch (error) {
        throw(error);
    }
})

const initialState = {
    user: null,
    loading: false,
    isError: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: {
      [userLogin.pending]: (state) => {
        state.loading = true;
        state.user = null;
        state.isError = null;
      },
      [userLogin.fulfilled]: (state, action) => {
          console.log(state,'state')
          console.log(action,'action')
          const {password} = action.payload;
          state.loading = false;
          state.user = {password};
          state.isError = null;
      },
      [userLogin.rejected]: (state, action) => {
        state.loading = false;
        state.user = null;
        state.isError = action.error.message;
      },
    }
})

export default authSlice.reducer;