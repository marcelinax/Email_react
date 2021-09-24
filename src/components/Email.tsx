import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import EmailEmailsList from "./EmailEmailsList";
import EmailMessage from "./EmailMessage";
import EmailSendMessageModal from "./EmailSendMessageModal";
import EmailSidebar from "./EmailSidebar";

const Email: React.FC = () => {

    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);
    const [showSendMessageModal, setShowSendMessageModal] = useState<boolean>(false);

    return (
        <div className={'email'}>
            <EmailSidebar email={loggedUser !== null ? loggedUser.email : ''}
                          avatarUrl={loggedUser !== null ? loggedUser.avatarUrl : ''}
                          setShowSendMessageModal={setShowSendMessageModal}/>
            <EmailEmailsList/>
            <EmailMessage/>
            {showSendMessageModal ? <EmailSendMessageModal/> : <></>}
        </div>
    );
};

export default Email;