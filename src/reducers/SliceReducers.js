import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit'


const cartReducer = createSlice({
    name : "cart",
    initialState : {cartShow: false},
    reducers : {
        toggleCart: (state, action) => {
            state.cartShow = !state.cartShow;
        },
        hideCart: (state, action) => {
            state.cartShow = false;
        },
    }
})

const modalReducer = createSlice({
    name : "modal",
    initialState : {show: false, text: ""},
    reducers : {
        showModal: (state, action) => {
            state.show = true;
            state.text = action.payload.text;
        },
        hideModal: (state) => {
            state.show = false;
            state.text = "";
        },
    },
})

export const {toggleCart, hideCart} = cartReducer.actions

export const {showModal, hideModal} = modalReducer.actions

export const store = configureStore({reducer: {
    cart: cartReducer.reducer,
    modal: modalReducer.reducer,
}})