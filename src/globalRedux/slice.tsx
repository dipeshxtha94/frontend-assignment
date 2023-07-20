import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchData= createAsyncThunk('fetch', async()=>{
    try{
        const data= await fetch('https://fakestoreapi.com/products/')
        const json= await data.json()
        return json
    } catch(err){
        console.log(err)
    }
}
)

const Slice= createSlice({
    name: 'products',
    initialState:{
        loading: false,
        data: [],
        searchValue: '' as string,
        singleProduct: [],
    },
    reducers:{
       changeSearchValue: (state: any, action: any)=>{
        state.searchValue= action.payload
       },
       setSingleProduct: (state: any, action: any)=>{
        state.singleProduct= action.payload
       }
    },
    extraReducers:{
        [fetchData.pending as any]: (state: any)=>{
            state.loading= true
        },
        [fetchData.fulfilled as any]: (state: any, action: any)=>{
            state.loading= false;
            state.data= action.payload
        },
        [fetchData.rejected as any]: (state: any)=>{
            state.loading= false;
            state.data= []
        }
    }
})

export const { changeSearchValue, setSingleProduct }= Slice.actions
export default Slice.reducer