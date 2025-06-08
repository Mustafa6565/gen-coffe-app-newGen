import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from '../Features/Coffes/coffeeSlice';


export const Store = configureStore({
    reducer: {
        coffees: coffeeReducer,
    }
})