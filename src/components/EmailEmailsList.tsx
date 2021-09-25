import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentEmail} from "../state/emailsSlice";
import {RootState} from "../store";
import Email from "../types/Email";
import EmailEmailsListItem from "./EmailEmailsListItem";

const EmailEmailsList: React.FC = () => {

    const [search, setSearch] = useState<string>('');
    const emails = useSelector((state: RootState) => state.emails.emails);
    const users = useSelector((state: RootState) => state.users.users);
    const emailsListType = useSelector((state: RootState) => state.emails.emailsListType);
    const dispatch = useDispatch();

    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);


    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const getLoggedUserEmails = (): Email[] => {
        if (loggedUser !== null)
            return (emails.filter(email => email.recipientEmail === loggedUser.email));
        else return [];
    };

    const getSendEmails = (): Email[] => {
        if (loggedUser !== null)
            return emails.filter(email => email.senderEmail === loggedUser.email);
        else return [];
    };


    const renderEmails = (): JSX.Element[] | JSX.Element => {
        return getLoggedUserEmails().length > 0 ? getLoggedUserEmails().map(email => (
            <EmailEmailsListItem senderEmail={email.senderEmail}
                                 content={email.content} title={email.title}
                                 avatarUrl={users.filter(user => user.email === email.senderEmail)[0].avatarUrl}
                                 onClick={() => dispatch(setCurrentEmail(email))}/>
        )) : <></>;
    };

    const renderSendEmails = (): JSX.Element[] | JSX.Element => {
        return getSendEmails().length > 0 ? getSendEmails().map(email => (

            <EmailEmailsListItem senderEmail={loggedUser !== null ? loggedUser.email : ''}
                                 content={email.content} title={email.title}
                                 avatarUrl={loggedUser !== null ? loggedUser.avatarUrl : ''}
                                 onClick={() => dispatch(setCurrentEmail(email))}/>
        )) : <></>;
    };

    return (
        <div className={'email-emails-list'}>
            <div className={'email-emails-list-filter-box'}>
                <i className="bx bx-search"/>
                <input placeholder={'Research'} value={search} onChange={handleSearchInput}/>
            </div>
            <div className={'email-emails-list-box'}>
                {emailsListType === 'incoming' ? renderEmails() : emailsListType === 'sending' ? renderSendEmails() : []}
             
            </div>
        </div>
    );
};

export default EmailEmailsList;