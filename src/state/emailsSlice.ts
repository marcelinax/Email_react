import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Email from "../types/Email";


interface EmailsState {
    emails: Email[];
    currentEmail: Email | null;
    emailError: string;
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
    emailError: ''
};

export const emailsSlice = createSlice({
    name: 'emails',
    initialState: initialState,
    reducers: {
        sendEmailMessage: (state, action: PayloadAction<Email>) => {
            const {recipientEmail} = action.payload;
            if (state.emails.map(email => email.recipientEmail).includes(recipientEmail)) {
                state.emails = [...state.emails, action.payload];
                saveEmailsInLocalStorage(state.emails);
            } else {
                state.emailError = `This email doesn't exist!`;
            }


        }
    }
});
export const {sendEmailMessage} = emailsSlice.actions;
export default emailsSlice.reducer;