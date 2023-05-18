import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("createUser" , async (data)=>{
    try {
        let response = await axios.post('https://6461c958491f9402f4aa92bf.mockapi.io/users' , data)
        return response
    } catch (error) {
        console.log(error)
    }
})

export const GetAllUsers = createAsyncThunk("GetAllUsers" , async (thunkapi , {rejectWithValue})=>{
    try {
      
        let response = await axios.get('https://6461c958491f9402f4aa92bf.mockapi.io/users')
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteUser = createAsyncThunk("deleteUser" , async (id , {rejectWithValue})=>{
    try {
      
        let response = await axios.delete(`https://6461c958491f9402f4aa92bf.mockapi.io/users/${id}`)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:false,
        message:"nothing",
       searchTerm:""
    },
    reducers:{
        searchTerm:(state,action)=>{
            state.searchTerm = action.payload
        }
    },
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading = true
        },
        [createUser.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = false
            state.message = "data save success"
        },
        [createUser.rejected]:(state , action)=>{
            state.loading = false
            state.error = true
        },
        [GetAllUsers.pending]:(state)=>{
            state.loading = true
        },
        [GetAllUsers.fulfilled]:(state , action)=>{
            state.loading = false
            state.users = action.payload?.data
            state.error = false
           
        },
        [GetAllUsers.rejected]:(state , action)=>{
            console.log("error")
            state.loading = false
            state.error = true
        },
        [deleteUser.pending]:(state)=>{
            state.loading = true
        },
        [deleteUser.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = false
            state.message = "deleted successfully"
           
        },
        [deleteUser.rejected]:(state , action)=>{
            console.log("error")
            state.loading = false
            state.error = true
        }
    }
})

export default userDetail.reducer 

export const { searchTerm} = userDetail.actions 