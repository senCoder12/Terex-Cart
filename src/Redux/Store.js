import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Features/ProductSlice";

export default configureStore({
    reducer: {
        products: ProductSlice
    }
})