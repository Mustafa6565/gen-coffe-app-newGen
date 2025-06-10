import { configureStore } from "@reduxjs/toolkit";
import { blogReducer, coffeeReducer, espressoReducer } from "../Features/Coffes/coffeeSlice";



export const Store = configureStore({
    reducer: {
        espressos: espressoReducer,
        coffees: coffeeReducer,
        blogs: blogReducer,
    },
})