import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetch', async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/products/')
        const json = await data.json()
        return json
    } catch (err) {
        console.log(err)
    }
}
)

export const fetchSingleData = createAsyncThunk('data', async (id: any) => {
    try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const json = await data.json()
        return json
    } catch (err) {
        console.log(err)
    }
})

const Slice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        data: [],
        searchValue: {},
        cartProduct: [],
        filteredSearchValue: [],
    },
    reducers: {
        changeSearchValue: (state: any, action: any) => {
            state.searchValue = action.payload as Object
        },
        setCardProduct: (state: any, action: any) => {
            state.cartProduct.push(action.payload)
        },
    },
})

export const { changeSearchValue, setCardProduct } = Slice.actions
export default Slice.reducer
