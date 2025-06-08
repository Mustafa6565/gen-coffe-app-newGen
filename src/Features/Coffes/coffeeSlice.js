import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../api/apiService";

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
export default coffeeSlice.reducer;