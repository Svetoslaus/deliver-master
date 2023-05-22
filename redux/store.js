//globaler Speicher

import warenkorbReducer from './warenkorb';
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        warenkorb: warenkorbReducer,
    },
});