import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  user: null,
  userLoading: false
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state, action)=>{
        state.user = action.payload
    },
    setUserLoading:(state, action)=>{
        state.userLoading = action.payload
    }
  },
})


export const { setUser, setUserLoading } = UserSlice.actions

export default UserSlice.reducer