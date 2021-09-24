import React from 'react';
import {useSelector} from "react-redux";
import Email from "./components/Email";
import EmailLoginForm from "./components/EmailLoginForm";
import {RootState} from "./store";


function App() {

    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);

    return (
        <>
            {loggedUser !== null ? <Email/> : <EmailLoginForm/>}

        </>
    );
}

export default App;
