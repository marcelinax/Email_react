import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import User from "../types/User";

interface UserState {
    users: User[];
    loggedUser: User | null;
}

const saveUsersInLocalStorage = (state: User[]): void => {
    localStorage.setItem('emailUsers', JSON.stringify(state));
};

const loadUsersFromLocalStorage = (): User[] => {
    return JSON.parse(localStorage.getItem('emailUsers') || '[]');
};

const initialState: UserState = {
    users: loadUsersFromLocalStorage(),
    loggedUser: null
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

        loginUser: (state, action: PayloadAction<User>) => {
            const {email} = action.payload;
            const userIndex = state.users.map(user => user.email).indexOf(email);
            if (state.users.map(user => user.email).includes(email)) {

                state.loggedUser = state.users[userIndex];

            } else {
                state.users = [...state.users, action.payload];
                state.loggedUser = action.payload;
                saveUsersInLocalStorage(state.users);
            }

        },
        logoutUser: (state) => {
            state.loggedUser = null;
        }
    }
});

export const {loginUser, logoutUser} = usersSlice.actions;
export default usersSlice.reducer;