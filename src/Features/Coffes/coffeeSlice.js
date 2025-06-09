import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../api/apiService";


// Asenkron Thunklar

export const fetchCoffes = createAsyncThunk(
    'coffees/fetchCoffees',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiService.getAllCoffees();
            return response;

        } catch (error) {
            return rejectWithValue("Kahve demleme yöntemleri yüklenirken bir hata oluştu.");
        }

    }
);
export const fetchEspressos = createAsyncThunk(
    'espressos/fetchEspressos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiService.getAllEspressoBeans();
            return response;
        } catch (error) {
            return rejectWithValue("Kahve Çekirdekleri Yüklenirken Bir Hata Oluştu.")
        }
    }
);


//      Espresso Slice
const espressoSlice = createSlice({
    name: 'espressos',
    initialState: {
        items: [],
        loading: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEspressos.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchEspressos.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.items = action.payload;

            })
            .addCase(fetchEspressos.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload || 'Bilinmeyen Bir Hata Oluştu';
                state.items = [];
            })
    },
})

//      Coffees Slice

const coffeeSlice = createSlice({
    name: 'coffees',
    initialState: {
        items: [],
        loading: 'idle',
        error: null,
    },

    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffes.pending, (state) => {
                state.loading = 'pending';
                state.error = null
            })
            .addCase(fetchCoffes.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCoffes.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload || 'Bilinmeyen Bir Hata Oluştu';
                state.items = []
            })
    },
});
export const espressoReducer = espressoSlice.reducer;
export const coffeeReducer = coffeeSlice.reducer;
