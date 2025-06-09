import { configureStore } from "@reduxjs/toolkit";
import { coffeeReducer, espressoReducer } from "../Features/Coffes/coffeeSlice";



export const Store = configureStore({
    reducer: {
        espressos: espressoReducer,
        coffees: coffeeReducer,
    },
})