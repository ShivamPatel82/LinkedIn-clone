import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducer/authReducer"
import postReducer from  "./reducer/postReducer"

/**
 * 
 * Steps for State Management
 * Submit Action
 * Handle action in It's reducer
 * Register here ->  Reducer
 * 
 */

export const store = configureStore({
    reducer:{
        auth: authReducer,
        postReducer: postReducer
    }
})
