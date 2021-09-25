import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import EmailMomentFromNow from "./EmailMomementFromNow";

const EmailMessage: React.FC = () => {

    const currentEmail = useSelector((state: RootState) => state.emails.currentEmail);
    const users = useSelector((state: RootState) => state.users.users);


    const renderEmailMessagePlaceholder = (): JSX.Element => {
        return (<div className={'email-message-placeholder'}>
            <i className="bx bx-envelope-open"/>
            <h3>Select a message from the mailbox</h3>
        </div>);
    };

    const getSenderUserAvatar = (): string => {
        if (currentEmail !== null)
            return users.filter(user => user.email === currentEmail.senderEmail)[0].avatarUrl;
        else return '';
    };

    const renderCurrentEmail = (): JSX.Element => {
        if (currentEmail !== null) {
            return (
                <div className={'email-message-current-email'}>
                    <div className={'email-message-current-email-top'}>
                        <div className={'email-message-current-email-top-time-box'}>
                            <i className="bx bx-time-five"/>
                            <p><EmailMomentFromNow date={currentEmail.date}/></p>
                        </div>
                        <div className={'email-message-current-email-top-buttons'}>
                            <button><i className="bx bx-share"/></button>
                            <button><i className="bx bx-archive-in"/></button>
                            <button><i className="bx bx-trash"/></button>
                        </div>
                    </div>
                    <div className={'email-message-current-email-main'}>
                        <div className={'email-message-current-email-main-user-box'}>
                            <div className={'email-message-current-email-main-user-box-avatar'}
                                 style={{backgroundImage: `url(${getSenderUserAvatar()})`}}/>
                            <div className={'email-message-current-email-main-user-box-info'}>
                                <p>{currentEmail.senderEmail}</p>
                            </div>
                        </div>
                        <div className={'email-message-current-email-main-message-box'}>
                            <h3>{currentEmail.title}</h3>
                            <p>{currentEmail.content}</p>
                        </div>
                    </div>
                </div>
            );
        } else return <></>;

    };


    return (
        <div className={'email-message'}>
            {currentEmail !== null ? renderCurrentEmail() : renderEmailMessagePlaceholder()}
        </div>
    );
};

export default EmailMessage;