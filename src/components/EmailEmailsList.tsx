import React, {ChangeEvent, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import Email from "../types/Email";
import EmailEmailsListItem from "./EmailEmailsListItem";

const EmailEmailsList: React.FC = () => {

    const [search, setSearch] = useState<string>('');
    const emails = useSelector((state: RootState) => state.emails.emails);
    const users = useSelector((state: RootState) => state.users.users);

    const loggedUser = useSelector((state: RootState) => state.users.loggedUser);


    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const getLoggedUserEmails = (): Email[] => {
        if (loggedUser !== null)
            return (emails.filter(email => email.recipientEmail === loggedUser.email));
        else return [];
    };


    const renderEmails = (): JSX.Element[] | JSX.Element => {
        return getLoggedUserEmails().length > 0 ? getLoggedUserEmails().map(email => (
            <EmailEmailsListItem senderEmail={email.senderEmail}
                                 content={email.content} title={email.title}
                                 avatarUrl={users.filter(user => user.email === email.senderEmail)[0].avatarUrl}/>
        )) : <></>;
    };

    return (
        <div className={'email-emails-list'}>
            <div className={'email-emails-list-filter-box'}>
                <i className="bx bx-search"/>
                <input placeholder={'Research'} value={search} onChange={handleSearchInput}/>
            </div>
            <div className={'email-emails-list-box'}>
                {renderEmails()}
            </div>
        </div>
    );
};

export default EmailEmailsList;