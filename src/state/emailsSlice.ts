import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Email from "../types/Email";


interface EmailsState {
    emails: Email[];
    currentEmail: Email | null;
    emailsListType: string;

}

const saveEmailsInLocalStorage = (state: Email[]): void => {
    localStorage.setItem('emails', JSON.stringify(state));
};

const loadEmailsFromLocalStorage = (): Email[] => {
    return JSON.parse(localStorage.getItem('emails') || '[]');
};

const initialState: EmailsState = {
    emails: loadEmailsFromLocalStorage(),
    currentEmail: null,
    emailsListType: 'incoming'

};

export const emailsSlice = createSlice({
    name: 'emails',
    initialState: initialState,
    reducers: {
        sendEmailMessage: (state, action: PayloadAction<Email>) => {
            state.emails = [...state.emails, action.payload];
            saveEmailsInLocalStorage(state.emails);


        },
        setCurrentEmail: (state, action: PayloadAction<Email>) => {
            state.currentEmail = action.payload;
        },
        changeEmailsListType: (state, action: PayloadAction<string>) => {
            state.emailsListType = action.payload;
        }

    }
});
export const {sendEmailMessage, setCurrentEmail, changeEmailsListType} = emailsSlice.actions;
export default emailsSlice.reducer;