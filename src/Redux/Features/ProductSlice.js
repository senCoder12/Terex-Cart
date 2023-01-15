import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getAllproducts = createAsyncThunk("products/get", async()=>{
    try {
        const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
        const products = await response.json();
        return products;
    } catch (error) {
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        defaultProducts: [],
        cartProducts: []
    },
    reducers: {
        setFilterProducts: (state,action)=> {
            state.allProducts = action.payload;
        },
        resetFilterProducts: (state,action)=> {
            state.allProducts = state.defaultProducts;
        },
        setCartProducts: (state,action)=> {
            state.cartProducts = action.payload;
        }
    },
    extraReducers: {
        [getAllproducts.pending] : (state,action)=> {},
        [getAllproducts.fulfilled] : (state,action)=> {
            state.allProducts = action.payload;
            state.defaultProducts = action.payload;
        },
        [getAllproducts.rejected] : (state,action)=> {},
    }
});

export const {setFilterProducts,resetFilterProducts,setCartProducts} = productSlice.actions; 

export default productSlice.reducer;