import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeEmailsListType, setCurrentEmail} from "../state/emailsSlice";
import {logoutUser} from "../state/usersSlice";
import {RootState} from "../store";


interface Props {
    avatarUrl: string;
    email: string;
    setShowSendMessageModal: (param: boolean) => void;

}

const EmailSidebar: React.FC<Props> = ({email, avatarUrl, setShowSendMessageModal}) => {

    const dispatch = useDispatch();
    const emails = useSelector((state: RootState) => state.emails.emails);
    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);


    const getAmountOfIncomingEmails = (): number => {
        if (emails.length > 0 && loggedUser !== null) {
            return emails.filter(email => email.recipientEmail === loggedUser.email).length;
        } else return 0;
    };


    return (
        <div className={'email-sidebar'}>
            <div className={'email-sidebar-user-box'}>
                <div className={'email-sidebar-user-box-avatar'} style={{backgroundImage: `url(${avatarUrl})`}}/>
                <div className={'email-sidebar-user-box-info'}>
                    <p>{email}</p>
                </div>
            </div>
            <div className={'email-sidebar-buttons-box'}>
                <button onClick={() => dispatch(changeEmailsListType('incoming'))}>
                    <i className="bx bx-envelope"/>
                    <p>Inbox</p>
                    <div className={'inbox-amount-box'}>
                        <p>{getAmountOfIncomingEmails()}</p>
                    </div>
                </button>
                <button onClick={() => {
                    setShowSendMessageModal(true);
                }}>
                    <i className="bx bx-pencil"/>
                    <p>New message</p>
                </button>
                <button onClick={() => dispatch(changeEmailsListType('sending'))}>
                    <i className="bx bx-send"/>
                    <p>Send</p>
                </button>

            </div>
            <div className={'email-sidebar-logout-box'}>
                <button onClick={() => {
                    dispatch(logoutUser());
                    dispatch(setCurrentEmail(null));
                    dispatch(changeEmailsListType('incoming'));
                }}><i className="bx bx-power-off"/>
                    <p>Logout</p>
                </button>
            </div>
        </div>
    );
};

export default EmailSidebar;