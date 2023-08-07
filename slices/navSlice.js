import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        origin: null,
        destination: null,
        travelTimeInfo: null,
        placeholder: 'Enter a location',

    },
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
        setPlaceHolder: (state, action) => {
            state.placeholder = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInfo, setPlaceHolder } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectPlaceHolder = (state) => state.nav.placeholder;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;