import { configureStore } from "@reduxjs/toolkit"
import customerReducer from "../provider/slices/customerSlice"
export default configureStore({
    reducer: {
        customer: customerReducer,

    }
})