import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"],
};

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
    reducer: {
        contact: persistedContactReducer,
        filters: filtersReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };