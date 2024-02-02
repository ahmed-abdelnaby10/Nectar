import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'


export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action)=>{
            const repeatedProduct = state.find((product)=>product.title === action.payload.title)
            const clonedProduct = {...action.payload}
            if (repeatedProduct) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1500,
                    background:"rgb(83 177 117)",
                    color: "#fff",
                    iconColor: "#fff",
                    width: "80%"
                });
                Toast.fire({
                    icon: "success",
                    title: "Product already added to cart!"
                });
            }else {
                state.push(clonedProduct)
            }
        },
        removeFromCart: (state, action)=>{
            return state.filter((product)=> product.title !== action.payload.title)
        },
        clearCart: (state, action)=>{
            return []
        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;