// Slice, Action, Reducerna, State

import {createSlice} from '@reduxjs/toolkit'

const warenkorb = createSlice({
    name: "warenkorb",
    initialState: {
        produkte: [],
        gesamtbetrag: 0,
        warenAnzahl: 0
    },
    reducers: {
        addProdukte: (state, action) => {
            state.produkte.push(action.payload);
            state.warenAnzahl += 1;
            state.gesamtbetrag += action.payload.preis * action.payload.menge;
        },
        leeren: (state) => {
            state = initialState;
        },
        deleteProdukt: (state, action) => {
            const leftProdukte = state.produkte.filter((produkt) => produkt._id !== action.payload._id);
            state.produkte = leftProdukte;
            state.warenAnzahl -= 1;
            state.gesamtbetrag -= action.payload.preis * action.payload.menge;
        },
    },
})

export const {addProdukte, leeren, deleteProdukt} = warenkorb.actions;
export default warenkorb.reducer;