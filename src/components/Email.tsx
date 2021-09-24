import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import EmailSidebar from "./EmailSidebar";

const Email: React.FC = () => {

    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);

    return (
        <div className={'email'}>
            <EmailSidebar email={loggedUser !== null ? loggedUser.email : ''}
                          avatarUrl={loggedUser !== null ? loggedUser.avatarUrl : ''}/>
        </div>
    );
};

export default Email;