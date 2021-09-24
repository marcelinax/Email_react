import {configureStore} from "@reduxjs/toolkit";
import emailsSlice from "./state/emailsSlice";
import usersSlice from "./state/usersSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        emails: emailsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;