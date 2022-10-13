import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        data: [
        ]
    },
    reducers: {
        getCustomers: (state) => { },
        updateCustomer: (state) => { },

    }
})
export const { getCustomers, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer