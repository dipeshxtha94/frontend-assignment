import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

const Store= configureStore({
    reducer:{
        products: Slice
    }
})

export default Store;